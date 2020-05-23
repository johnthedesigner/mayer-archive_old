import Head from 'next/head'
import Link from 'next/link'
import _ from 'lodash'

import { getImage, getImages, getEnvelope } from '../../../lib/api'

const ImageDetail = ({envelope, image}) => {
  const {image_id, caption_on_envelope} = image
  const {date_developed, envelope_id, envelope_notes} = envelope
  const exposure_number = image_id.split('-')[1]

  return (
    <div className="container">
        <h1 className="title">
          Hello world!
        </h1>

        <h3>{image.image_id}</h3>
        <img src={`https://res.cloudinary.com/dkpugzzu5/image/upload/v1590179543/mayer-archive/${envelope_id}_${date_developed}_${exposure_number}.jpg`}/>
        <h4>
          <b>Envelope: </b>
          <Link href={`/catalog/envelopes/${envelope_id}`}>
            <a>{envelope_id}</a>
          </Link>
        </h4>

    </div>
  )
}

export async function getStaticPaths() {
  const images = (await getImages()) || []
  return {
    paths: images.map(image => {
      let envelope_id = image.image_id.split('-')[0]
      return (
        {
          params: {
            image_id: image.image_id,
            envelope_id
          },
        }
      )
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const envelope_id = params.image_id.split('-')[0]
  const image = (await getImage(params.image_id)) || []
  const envelope = (await getEnvelope(envelope_id)) || []
  return {
    props: { image, envelope }
  }
}

export default ImageDetail
