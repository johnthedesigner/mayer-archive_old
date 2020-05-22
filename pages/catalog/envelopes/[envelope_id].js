import Head from 'next/head'
import _ from 'lodash'

import { getEnvelope, getEnvelopes } from '../../../lib/api'

const ImageList = ({images}) => {
  let list = _.orderBy(images, 'image_id', 'asc').map(image => {
    return (
      <li key={image.image_id}>{image.image_id}</li>
    )
  })
  return list
}

const EnvelopeDetail = (envelope) => {
  return (
    <div className="container">
        <h1 className="title">
          Hello world!
        </h1>

        <h3>{envelope.envelope_id}</h3>

        <ul>
          <ImageList images={envelope.images}/>
        </ul>

    </div>
  )
}

export async function getStaticPaths() {
  const envelopes = (await getEnvelopes()) || []
  return {
    paths: envelopes.map(envelope => ({
      params: {
        envelope_id: envelope.envelope_id,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const envelope = (await getEnvelope(params.envelope_id)) || []
  return {
    props: { ...envelope },
  }
}

export default EnvelopeDetail
