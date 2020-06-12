import Head from "next/head";
import Link from "next/link";
import _ from "lodash";

import { getCollections } from "../lib/api";
import Header from "../components/Header";
import {
  Hero,
  HeroContent,
  HeroSubtitleA,
  HeroSubtitleB,
  HeroTitle
} from "../components/Hero";

const theme = "blue";

const Home = collection => {
  return (
    <div className="container">
      <Header />
      <Hero image={collection.images[0]} theme={theme}>
        <HeroContent theme={theme}>
          <HeroSubtitleA theme={theme}>Latest Collection</HeroSubtitleA>
          <HeroTitle theme={theme}>California</HeroTitle>
          <HeroSubtitleB theme={theme}>circa 1952</HeroSubtitleB>
        </HeroContent>
      </Hero>
      <h1 className="title">Hello world! This is the homepage</h1>
      <p>
        <Link href="/catalog">
          <a>Catalog</a>
        </Link>
      </p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const data = (await getCollections())[0] || [];
  return {
    props: { ...data }
  };
}

export default Home;
