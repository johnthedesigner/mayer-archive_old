import Head from 'next/head'
import Link from 'next/link'
import _ from 'lodash'

import { getImage, getImages } from '../../../lib/api'

const ImageDetail = (image) => {
  let envelope_id = image.image_id.split('-')[0]

  return (
    <div className="container">
        <h1 className="title">
          Hello world!
        </h1>

        <h3>{image.image_id}</h3>
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
  const image = (await getImage(params.image_id)) || []
  return {
    props: { ...image },
  }
}

export default ImageDetail
