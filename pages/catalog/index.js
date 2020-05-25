import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import { getDigitizedEnvelopes } from "../../lib/api";
import Header from "../../components/Header";

const ImageList = ({ images }) => {
  let list = images.map(image => {
    return (
      <li key={image.image_id}>
        <Link href={`/catalog/images/${image.image_id}`}>
          <a>{image.image_id}</a>
        </Link>
      </li>
    );
  });
  return list;
};

const EnvelopeList = ({ envelopes }) => {
  let list = _.orderBy(envelopes, "envelope_id", "asc").map(envelope => {
    return (
      <li key={envelope.envelope_id}>
        <b>
          <Link href={`/catalog/envelopes/${envelope.envelope_id}`}>
            <a>{envelope.envelope_id}</a>
          </Link>
        </b>
        <ul>
          <ImageList images={envelope.images} />
        </ul>
      </li>
    );
  });
  return list;
};

const CatalogHome = envelopes => {
  return (
    <div className="container">
      <Header />
      <h1 className="title">The Catalog Homepage</h1>

      <hr />

      <h2>MAP</h2>

      <hr />

      <h3>Envelopes</h3>
      <ul>
        <EnvelopeList envelopes={envelopes.envelopes} />
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const envelopes = (await getDigitizedEnvelopes()) || [];
  return {
    props: { envelopes }
  };
}

export default CatalogHome;
