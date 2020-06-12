/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import Link from "next/link";

import color from "./_color";
import { baseFontSize, rempx, space } from "./_scale";
import { fontFamily } from "../components/_type";
import Logo from "./Logo";

const Header = props => {
  return (
    <header>
      <Logo width="125" height="90" theme={props.theme} />
      <ul
        css={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          listStyle: "none",
          margin: 0,
          padding: `0 ${space[6]}`,
          fontFamily: fontFamily.sans,
          fontSize: rempx(1.75),
          textAlign: "right",
          letterSpacing: "1px",
          color: color.gray[8],
          li: {
            display: "inline-block",
            padding: `${space[5]} ${space[3]}`
          },
          a: {
            padding: `${space[6]} ${space[3]}`,
            textDecoration: "none",
            color: color.blue[0],
            "&:hover": {
              color: color.gold[2]
            }
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
        <li>
          <Link href="/collections">
            <a>Collections</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
