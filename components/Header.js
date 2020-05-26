/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import Link from "next/link";

import color from "./_color";
import { baseFontSize, px, space } from "./_scale";

const Header = () => {
  return (
    <header>
      <ul
        css={{
          backgroundColor: color.gray[9],
          listStyle: "none",
          margin: 0,
          padding: 0,
          textAlign: "center",
          color: color.gray[0],
          li: {
            display: "inline-block",
            padding: `${space[3]} 0`
          },
          a: {
            padding: space[3],
            textDecoration: "none"
          }
        }}
      >
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
