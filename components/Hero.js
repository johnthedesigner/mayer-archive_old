/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import _ from "lodash";

import color from "./_color";
import { rempx } from "./_scale";
import { fontFamily } from "./_type";

let heroStyles = theme => {
  let styles = {
    heroColor: color.blue[5],
    multiplyOpacity: 0.6,
    screenOpacity: 1,
    subtitleColor: color.blue[7]
  };
  switch (theme) {
    case "blue":
      // keep default blue color palette
      break;
    case "red":
      styles = {
        heroColor: color.red[5],
        multiplyOpacity: 0.6,
        screenOpacity: 1,
        subtitleColor: color.red[7]
      };
      break;
    case "gold":
      styles = {
        heroColor: color.gold[3],
        multiplyOpacity: 0.6,
        screenOpacity: 1,
        subtitleColor: color.gold[7]
      };
      break;
    case "ltGray":
      styles = {
        heroColor: color.gray[0],
        multiplyOpacity: 0.6,
        screenOpacity: 0.6,
        subtitleColor: color.gray[7]
      };
      break;
    case "dkGray":
      styles = {
        heroColor: color.gray[10],
        multiplyOpacity: 0.6,
        screenOpacity: 1,
        subtitleColor: color.gray[2]
      };
      break;
    default:
      break;
  }

  return styles;
};

export const Hero = props => {
  let { children, image, theme } = props;
  let styles = heroStyles(theme);

  if (image.image_id) {
    let height = 2000;
    let width = 2000;
    let image_transform = `h_${height},w_${width}`;
    let exposure_number = image.image_id.split("-")[1];
    let envelope_id = image.envelope.envelope_id;
    let image_url = `https://res.cloudinary.com/dkpugzzu5/image/upload/${image_transform}/v1590179543/mayer-archive/`;
    // let image_filename = `${image.envelope.envelope_id}_${
    //   image.envelope.date_developed
    // }_${exposure_number}.jpg`;
    // let image_filename = "323_1956-11-03_08"; // Dancing
    // let image_filename = "318_1956-11-03_10"; // Office
    // let image_filename = "324_1957-01-13_07"; // Darkroom
    let image_filename = "316_1956-11-03_10"; // Picnic

    return (
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${image_url}${image_filename})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
          width: "100%"
        }}
      >
        <div
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            mixBlendMode: "multiply",
            background: styles.heroColor,
            opacity: styles.multiplyOpacity
          }}
        />
        <div
          css={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            mixBlendMode: "screen",
            background: styles.heroColor,
            opacity: styles.screenOpacity
          }}
        />
        {children}
      </div>
    );
  } else {
    return null;
  }
};

export const HeroContent = props => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10
      }}
    >
      {props.children}
    </div>
  );
};

export const HeroTitle = props => {
  let { isH1, theme, text } = props;

  let heroTitleStyles = {
    color: "white",
    fontSize: rempx(12),
    textAlign: "center",
    lineHeight: 1,
    margin: 0
  };

  if (isH1) {
    return <h1 css={heroTitleStyles}>{props.children}</h1>;
  } else {
    return <h2 css={heroTitleStyles}>{props.children}</h2>;
  }
};

export const HeroSubtitleA = props => {
  let { theme, children } = props;
  let styles = heroStyles(theme);

  let heroSubtitleStyles = {
    color: styles.subtitleColor,
    fontSize: rempx(4),
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 1,
    margin: 0
  };

  return <h3 css={heroSubtitleStyles}>{children}</h3>;
};

export const HeroSubtitleB = props => {
  let { theme, children } = props;
  let styles = heroStyles(theme);

  let heroSubtitleStyles = {
    color: styles.subtitleColor,
    fontFamily: fontFamily.sans,
    fontSize: rempx(3),
    fontWeight: 700,
    textAlign: "center",
    lineHeight: 1,
    color: "white",
    margin: 0
  };

  return <h3 css={heroSubtitleStyles}>{children}</h3>;
};
