import Head from 'next/head'
import Link from 'next/link'
import _ from 'lodash'

import { getEnvelopes } from '../lib/api'

const Home = (envelopes) => {
  return (
    <div className="container">
        <h1 className="title">
          Hello world! This is the homepage
        </h1>
        <p>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
        </p>
    </div>
  )
}

export default Home
