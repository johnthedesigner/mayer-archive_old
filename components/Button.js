/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import color from "./_color";
import { fontFamily } from "./_type";
import { rempx } from "./_scale";

const Button = props => {
  return (
    <button
      css={{
        fontFamily: fontFamily.serif,
        fontStyle: "italic",
        textAlign: "center",
        border: "none",
        borderRadius: ".125rem",
        background: color.gold[2],
        color: color.gold[8],
        padding: `${rempx(0.5)} ${rempx(2)}`,
        transition: "all linear .1s",
        "&:hover": {
          background: color.gold[1]
        }
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
