/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import color from "../components/_color";
import { baseFontSize, px, space } from "../components/_scale";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Unna:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global
          styles={{
            h1: {
              fontFamily: "Montserrat, sans-serif"
            },
            a: {
              color: color.aqua[4],
              transition: "all linear .1s"
            },
            "a:hover": {
              color: color.aqua[2]
            }
          }}
        />
        <body
          css={{
            padding: 0,
            margin: 0,
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: baseFontSize,
            color: color.gray[11]
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
