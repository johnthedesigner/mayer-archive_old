import Head from 'next/head'
import _ from 'lodash'

import { getImage, getImages } from '../../../lib/api'

const ImageDetail = (image) => {
  return (
    <div className="container">
        <h1 className="title">
          Hello world!
        </h1>

        <h3>{image.image_id}</h3>
        <h4><b>Envelope: </b>{image.envelope_id.envelope_id}</h4>

    </div>
  )
}

export async function getStaticPaths() {
  const images = (await getImages()) || []
  return {
    paths: images.map(image => ({
      params: {
        image_id: image.image_id,
        envelope_id: image.envelope_id ? image.envelope_id.envelope_id : ""
      },
    })),
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
