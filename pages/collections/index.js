/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import { getCollections } from "../../lib/api";
import Header from "../../components/Header";
import {
  Hero,
  HeroContent,
  HeroSubtitleA,
  HeroSubtitleB,
  HeroTitle
} from "../../components/Hero";
import Button from "../../components/Button";

const CollectionList = ({ collections, theme }) => {
  let list = _.orderBy(collections, "slug", "asc").map(collection => {
    return (
      <Hero image={collection.images[0]} theme={theme}>
        <HeroContent theme={theme}>
          <HeroSubtitleA theme={theme}>Latest Collection</HeroSubtitleA>
          <HeroTitle theme={theme}>California</HeroTitle>
          <HeroSubtitleB theme={theme}>circa 1952</HeroSubtitleB>
          <div css={{ textAlign: "center", padding: "1rem" }}>
            <Button type="primary">View this collection</Button>
          </div>
        </HeroContent>
      </Hero>
    );
  });
  return list;
};

const CollectionsHome = collections => {
  return (
    <div className="container">
      <Header />
      <CollectionList collections={collections} theme="blue" />
      <CollectionList collections={collections} theme="red" />
      <CollectionList collections={collections} theme="gold" />
    </div>
  );
};

export async function getStaticProps() {
  const collections = (await getCollections()) || [];
  return {
    props: { ...collections }
  };
}

export default CollectionsHome;
