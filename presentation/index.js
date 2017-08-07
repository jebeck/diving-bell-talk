// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Link, Slide } from "spectacle";
import { FaGithub, FaTwitter } from "react-icons/lib/fa";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {};

preloader(images);

const themeColors = {
  primary: "white",
  secondary: "#291829",
  tertiary: "#323E6A",
  quartenary: "#E29189"
};

const theme = createTheme(themeColors, {
  primary: "Bitter",
  secondary: "Source Sans Pro"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={["fade"]}
        transitionDuration={350}
        theme={theme}
      >
        <Slide>
          <Heading fit size={1} lineHeight={2}>
            React-ing htmlFor=empathy
          </Heading>
        </Slide>
        <Slide textSize="2.5rem">
          <Heading fit size={1}>
            slide deck is online!
          </Heading>
          <Link
            href="http://janabeck.com/diving-bell-talk/"
            target="_blank"
            textColor="secondary"
          >
            http://janabeck.com/diving-bell-talk/
          </Link>
        </Slide>
        <Slide>
          <Heading
            lineHeight={1.35}
            size={2}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://github.com/jebeck"
              target="_blank"
              textColor="quartenary"
            >
              <FaGithub />
            </Link>
            <span style={{ color: themeColors.quartenary }}>
              +:
            </span>&nbsp;@jebeck
          </Heading>
          <Heading
            lineHeight={1.35}
            size={2}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://twitter.com/iPancreas"
              target="_blank"
              textColor="quartenary"
            >
              <FaTwitter />
            </Link>
            <span style={{ color: themeColors.quartenary }}>
              :
            </span>&nbsp;@iPancreas
          </Heading>
        </Slide>
        {/* TODO: company slide? */}
      </Deck>
    );
  }
}
