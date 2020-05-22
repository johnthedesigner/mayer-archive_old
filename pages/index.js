import Head from 'next/head'
import _ from 'lodash'

import { getEnvelopes } from '../lib/api'

const ImageList = ({images}) => {
  let list = images.map(image => {
    return (
      <li key={image.image_id}>{image.image_id}</li>
    )
  })
  return list
}

const EnvelopeList = ({envelopes}) => {
  let list = _.orderBy(envelopes, 'envelope_id', 'asc').map(envelope => {
    return (
      <li key={envelope.envelope_id}>
        <b>{envelope.envelope_id}</b>
        <ul>
          <ImageList images={envelope.images}/>
        </ul>
      </li>
    )
  })
  return list
}

const Home = (envelopes) => {
  return (
    <div className="container">
        <h1 className="title">
          Hello world!
        </h1>

        <ul>
          <EnvelopeList envelopes={envelopes.envelopes}/>
        </ul>

    </div>
  )
}

export async function getStaticProps() {
  const envelopes = (await getEnvelopes()) || []
  return {
    props: { envelopes },
  }
}

export default Home
