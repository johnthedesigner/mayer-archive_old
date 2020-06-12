/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import color from "../components/_color";
import { baseFontSize, px, space } from "../components/_scale";
import { fontFamily } from "../components/_type";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,600&family=Taviraj:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Global
          styles={{
            "h1, h2, h3, h4, h5, h6": {
              fontFamily: fontFamily.serif,
              fontWeight: 700,
              lineHeight: 1.25
            },
            "h3, h4, h5, h6": {
              fontFamily: fontFamily.serif,
              fontWeight: 400,
              lineHeight: 1.5
            },
            p: {
              fontFamily: fontFamily.serif,
              lineHeight: 1.5
            },
            a: {
              color: color.blue[4],
              transition: "all linear .1s"
            },
            "a:hover": {
              color: color.blue[2]
            }
          }}
        />
        <body
          css={{
            padding: 0,
            margin: 0,
            fontFamily: fontFamily.serif,
            fontSize: baseFontSize,
            color: color.gray[6]
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
