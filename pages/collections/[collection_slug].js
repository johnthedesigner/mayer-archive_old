/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import { getCollection, getCollections } from "../../lib/api";
import color from "../../components/_color";
import { rempx } from "../../components/_scale";
import Header from "../../components/Header";
import {
  Hero,
  HeroContent,
  HeroSubtitleA,
  HeroSubtitleB,
  HeroTitle
} from "../../components/Hero";

const ImageList = ({ images }) => {
  let list = _.orderBy(images, "image_id", "asc").map(image => {
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

const theme = "blue";

const CollectionDetail = collection => {
  return (
    <div className="container">
      <Header theme={theme} />
      <Hero image={collection.images[0]} theme={theme}>
        <HeroContent theme={theme}>
          <HeroSubtitleA theme={theme}>Latest Collection</HeroSubtitleA>
          <HeroTitle theme={theme}>California</HeroTitle>
          <HeroSubtitleB theme={theme}>circa 1952</HeroSubtitleB>
        </HeroContent>
      </Hero>

      <ul>
        <ImageList images={collection.images} />
      </ul>
    </div>
  );
};

export async function getStaticPaths() {
  const collections = (await getCollections()) || [];
  return {
    paths: collections.map(collection => ({
      params: {
        collection_slug: collection.slug
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const collection = (await getCollection(params.collection_slug)) || [];
  return {
    props: { ...collection }
  };
}

export default CollectionDetail;
