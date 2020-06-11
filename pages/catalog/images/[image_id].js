import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import Header from "../../../components/Header";
import Image from "../../../components/Image";

import { getImage, getImages, getEnvelope } from "../../../lib/api";

const ImageDetail = ({ envelope, image, nextImage, prevImage }) => {
  const { image_id, caption_on_envelope } = image;
  const { date_developed, envelope_id, envelope_notes } = envelope;
  const exposure_number = image_id.split("-")[1];

  return (
    <div className="container">
      <Header />
      <h1 className="title">Hello world!</h1>

      <h3>{image_id}</h3>
      <Link href={`/catalog/images/${prevImage.image_id}`}>
        <a>
          <Image
            envelope_id={prevImage.image_id.split("-")[0]}
            date_developed={prevImage.envelope.date_developed}
            exposure_number={prevImage.image_id.split("-")[1]}
            height={200}
            width={200}
          />
        </a>
      </Link>
      <Image
        envelope_id={envelope_id}
        date_developed={date_developed}
        exposure_number={exposure_number}
        height={800}
        width={800}
      />
      <Link href={`/catalog/images/${nextImage.image_id}`}>
        <a>
          <Image
            envelope_id={nextImage.image_id.split("-")[0]}
            date_developed={nextImage.envelope.date_developed}
            exposure_number={nextImage.image_id.split("-")[1]}
            height={200}
            width={200}
          />
        </a>
      </Link>
      <h4>
        <b>Envelope: </b>
        <Link href={`/catalog/envelopes/${envelope_id}`}>
          <a>{envelope_id}</a>
        </Link>
      </h4>
    </div>
  );
};

export async function getStaticPaths() {
  const images = (await getImages()) || [];
  return {
    paths: images.map((image, i) => {
      let envelope_id = image.image_id.split("-")[0];
      return {
        params: {
          image_id: image.image_id,
          envelope_id
        }
      };
    }),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const envelope_id = params.image_id.split("-")[0];
  const images = _.orderBy((await getImages()) || [], "image_id");
  const image = _.find(images, { image_id: params.image_id });
  const imageIndex = _.findIndex(images, { image_id: params.image_id });
  const nextImage = images[imageIndex + 1];
  const prevImage = images[imageIndex - 1];
  const envelope = (await getEnvelope(envelope_id)) || [];
  return {
    props: { envelope, image, nextImage, prevImage }
  };
}

export default ImageDetail;
