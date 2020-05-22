import Head from 'next/head'
import _ from 'lodash'

import { getEnvelopes } from '../lib/api'

const EnvelopeList = ({envelopes}) => {
  console.log(envelopes)
  let list = envelopes.map((envelope, index) => {
    return (
      <li key={envelope.envelope_id}>{envelope.envelope_id}</li>
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
