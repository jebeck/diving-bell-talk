// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";
import shuffle from "shuffle-array";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";
import { FaExternalLink, FaGithub, FaTwitter } from "react-icons/lib/fa";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import FreqOrderedLetters from "../assets/components/freqorderedletters";
import WebGazer from "../assets/components/webgazer.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  benLomond: require("../assets/images/ben-lomond.jpg"),
  bestCoverWebcam2: require("../assets/images/best-cover-webcam2.png"),
  blinkUISketch: require("../assets/images/blink-UI-sketch.png"),
  brixtonTreadmill: require("../assets/images/treadmill-Brixton-prison.jpg"),
  catHuggingStuffy: require("../assets/images/cat-hugging-stuffy.gif"),
  chatroulette: require("../assets/images/chatroulette.png"),
  divingBellLanding: require("../assets/images/diving-bell-landing.png"),
  esaReference: require("../assets/images/ESA-reference.jpg"),
  jdbDictating: require("../assets/images/jdb-dictating.jpg"),
  jdbWithKids: require("../assets/images/jdb-with-kids.jpg"),
  lucilleBluthWink: require("../assets/images/lucille-bluth-wink.gif"),
  okGoTreadmill: require("../assets/images/ok-go-treadmill.gif"),
  oscarWilde: require("../assets/images/oscar-wilde.jpg"),
  prestonTreadmill: require("../assets/images/treadmill-Preston-prison.jpg"),
  telegraphTapeWebcam: require("../assets/images/telegraph-tape-webcam.png"),
  treadmill: require("../assets/images/treadmill.jpg"),
  webcam: require("../assets/images/webcam.jpg"),
  webgazer: require("../assets/images/webgazer.png"),
  williamCubitt: require("../assets/images/william-cubitt.jpg"),
  williamCubittDead: require("../assets/images/william-cubitt-dead.png"),
  xcoffee: require("../assets/images/xcoffee.gif")
};

preloader(images);

const themeColors = {
  primary: "snow",
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
        transition={["slide"]}
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
          <Heading
            lineHeight={1.35}
            size={3}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://github.com/jebeck"
              target="_blank"
              textColor="tertiary"
            >
              <span style={{ color: themeColors.quartenary }}>
                <FaGithub />+:&nbsp;
              </span>@jebeck
            </Link>
          </Heading>
          <Heading
            lineHeight={1.35}
            size={3}
            textAlign="left"
            textColor="tertiary"
          >
            <Link
              href="https://twitter.com/iPancreas"
              target="_blank"
              textColor="tertiary"
            >
              <span style={{ color: themeColors.quartenary }}>
                <FaTwitter />:&nbsp;
              </span>@iPancreas
            </Link>
          </Heading>
        </Slide>
        <Slide>
          <Heading lineHeight={1.5} size={2}>
            dataviz eng
          </Heading>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="488.033 281.743 120.333 120.307"
            width="45vw"
            height="45vh"
          >
            <path
              fill="#847C78"
              d="M607.707 340.293l-13.164-13.164 11.39-11.39c.878-.88.878-2.303 0-3.182s-2.304-.88-3.183 0l-11.39 11.39-18.373-18.375 11.397-11.397c.88-.88.88-2.303 0-3.182s-2.303-.88-3.182 0l-11.397 11.397-20.015-20.014c-.844-.844-2.338-.844-3.182 0l-19.93 19.93-11.312-11.312c-.88-.88-2.303-.88-3.182 0s-.88 2.303 0 3.182l11.312 11.312-18.39 18.39-11.32-11.32c-.88-.88-2.303-.88-3.182 0s-.88 2.303 0 3.182l11.32 11.32-13.233 13.233c-.42.422-.658.994-.658 1.59s.237 1.17.66 1.592l13.163 13.164-11.388 11.387c-.88.88-.88 2.303 0 3.182.44.438 1.015.658 1.59.658s1.152-.22 1.592-.66l11.387-11.388 18.373 18.373-11.397 11.397c-.88.88-.88 2.303 0 3.182.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66l11.397-11.397 20.016 20.015c.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66l19.93-19.93 11.312 11.312c.44.44 1.015.66 1.59.66s1.152-.22 1.592-.66c.88-.88.88-2.303 0-3.182l-11.312-11.312 18.39-18.39 11.32 11.32c.44.438 1.016.658 1.592.658s1.15-.22 1.59-.66c.88-.878.88-2.302 0-3.18l-11.32-11.32 13.233-13.233c.88-.877.88-2.3 0-3.18zM548.2 287.148l18.424 18.424-18.34 18.34-18.423-18.425 18.34-18.34zm-54.735 54.736l11.643-11.643 11.573 11.574-11.64 11.643-11.575-11.573zm14.755 14.755l13.233-13.235c.88-.88.88-2.303 0-3.182L508.29 327.06l18.39-18.39 18.423 18.423-13.284 13.284c-.88.88-.88 2.303 0 3.182l13.112 13.112-18.34 18.34-18.372-18.373zm40.065-26.365l11.522 11.522-11.693 11.693-11.522-11.522 11.693-11.693zm-.085 66.343l-18.425-18.425 18.34-18.34 18.424 18.426-18.34 18.338zm21.52-21.52l-18.424-18.425 13.284-13.284c.88-.88.88-2.304 0-3.183l-13.113-13.113 18.34-18.34 18.373 18.375-13.232 13.232c-.88.88-.88 2.303 0 3.182l13.164 13.164-18.39 18.39zm21.573-21.573l-11.573-11.573 11.64-11.642 11.574 11.574-11.64 11.64z"
            />
          </svg>
          <Heading fit size={1}>
            Stitch Fix Algorithms
          </Heading>
          <Link
            href="http://algorithms-tour.stitchfix.com/"
            target="_blank"
            textColor="tertiary"
          >
            (<FaExternalLink />&nbsp;take the Stitch Fix algo tour!)
          </Link>
        </Slide>
        <Slide bgImage={images.treadmill}>
          <Appear>
            <Heading
              bgColor="rgba(255,255,255,0.6666666667)"
              lineHeight={1.5}
              padding="0 0 1rem 0"
              size={2}
              textColor="tertiary"
            >
              (a treadmill)
            </Heading>
          </Appear>
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="https://www.flickr.com/photos/29638108@N06/5618665304/in/faves-134718242@N08/"
              target="_blank"
              textColor="white"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: 0 }}
            >
              Image by Jennifer C. (CC BY 2.0)
            </Link>
          </div>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.brixtonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
              target="_blank"
              textColor="quartenary"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: "-8rem" }}
            >
              Image via the BBC
            </Link>
          </div>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.williamCubitt})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
              target="_blank"
              textColor="quartenary"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: "-8rem" }}
            >
              Image via the BBC
            </Link>
          </div>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.brixtonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
              target="_blank"
              textColor="quartenary"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: "-8rem" }}
            >
              Image via the BBC
            </Link>
          </div>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.prestonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="https://www.flickr.com/photos/rpsmithbarney/4266533201/in/faves-134718242@N08/"
              target="_blank"
              textColor="quartenary"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: "0" }}
            >
              Public domain image via the Preston Digital Archive
            </Link>
          </div>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.benLomond})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide bgImage={images.treadmill}>
          <Heading
            bgColor="rgba(255,255,255,0.6666666667)"
            lineHeight={1.5}
            padding="0 0 1rem 0"
            size={2}
            textColor="tertiary"
          >
            (a treadmill)
          </Heading>
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="https://www.flickr.com/photos/29638108@N06/5618665304/in/faves-134718242@N08/"
              target="_blank"
              textColor="white"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: 0 }}
            >
              Image by Jennifer C. (CC BY 2.0)
            </Link>
          </div>
        </Slide>
        <Slide bgImage={images.okGoTreadmill} />
        <Slide>
          <Heading lineHeight={1.5} fit>
            the inventor is dead
          </Heading>
          <Heading lineHeight={1.5}>💀 😵 💀</Heading>
          <Heading lineHeight={1.5} fit>
            <S type="strikethrough">long live the inventor!</S>
          </Heading>
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.williamCubittDead})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
              target="_blank"
              textColor="quartenary"
              textSize="0.5em"
              style={{ position: "fixed", bottom: "1rem", left: "-8rem" }}
            >
              Image via the BBC
            </Link>
          </div>
        </Slide>
        <Slide>
          <Heading fit>technologies have</Heading>
          <Heading fit>histories</Heading>
          <Heading>(and contexts)</Heading>
        </Slide>
        <Slide>
          <Heading fit>but histories (and contexts)</Heading>
          <Heading>
            are{" "}
            <S textColor="secondary" type="bold">
              not
            </S>
          </Heading>
          <Heading fit>definitive</Heading>
        </Slide>
        <Slide>
          <Image src={images.jdbWithKids} width="75%" />
          <Heading fit size={3}>
            Jean-Dominique Bauby
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.jdbDictating} width="75%" />
          <Heading fit size={3}>
            Jean-Dominique Bauby at Berck-sur-Mer with Claude Mendibil
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              You survive, but you survive with what is so aptly known as
              “locked-in syndrome.”
            </Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              Paralyzed from head to toe, the patient, his mind intact, is
              imprisoned inside his own body, unable to speak or move.
            </Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              In my case, blinking my left eyelid is my only means of
              communication.
            </Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading fit textColor="secondary">
            partner-assisted scanning
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">It is a simple enough system.</Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              You read off the alphabet (ETA version, not ABC) until, with a
              blink of my eye, I stop you at the letter to be noted.
            </Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading fit lineHeight={1.5}>
            French frequency-ordered alphabet
          </Heading>
          <Layout>
            <Fill>
              <FreqOrderedLetters locale="fr" />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              Nervous visitors come most quickly to grief.
            </Quote>
            <Cite textColor="tertiary">Jean-Domnique Bauby</Cite>
          </BlockQuote>
        </Slide>
        <Slide
          style={{
            backgroundImage: `url(${images.divingBellLanding})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide bgColor="quartenary">
          <Heading fit lineHeight={1.5} textColor="secondary">
            <S type="italic">partner-less</S>
            <br />partner-assisted scanning
          </Heading>
          <Appear>
            <Heading>(😮)</Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.lucilleBluthWink} />
        <Slide
          style={{
            backgroundImage: `url(${images.webgazer})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide>
          <Heading fit size={1} textFont="monospace">
            {"<script src=\"webgazer.js\" type=\"text/javascript\" >"}
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-simple-start.example")}
          ranges={[
            { loc: [0, 0], title: "WebGazer: simple start" },
            {
              loc: [0, 8],
              note: "1) set gaze listener callback fn"
            },
            {
              loc: [8, 9],
              note: "2) begin!"
            }
          ]}
        />
        <Slide>
          <Heading fit>🤔 WebGazer + React...?? 🤔</Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-via-index.example")}
          ranges={[
            { loc: [0, 0], title: "load via index.html" },
            {
              loc: [8, 12],
              note: "late execution for WebGL"
            },
            {
              loc: [3, 7],
              note: "💰💰💰 data processing in Web Worker "
            }
          ]}
        />
        <Slide>
          <Heading fit lineHeight={1.25}>
            {shuffle([
              "👷‍♀️",
              "👷🏻‍♀️",
              "👷🏼‍♀️",
              "👷🏽‍♀️",
              "👷🏾‍♀️",
              "👷🏿‍♀️",
              "👷",
              "👷🏻",
              "👷🏼",
              "👷🏽",
              "👷🏾",
              "👷🏿"
            ]).join("")}
          </Heading>
          <Heading fit>Web Workers</Heading>
          <Heading fit lineHeight={1.25}>
            {shuffle([
              "👷‍♀️",
              "👷🏻‍♀️",
              "👷🏼‍♀️",
              "👷🏽‍♀️",
              "👷🏾‍♀️",
              "👷🏿‍♀️",
              "👷",
              "👷🏻",
              "👷🏼",
              "👷🏽",
              "👷🏾",
              "👷🏿"
            ]).join("")}
          </Heading>
        </Slide>
        <Slide>
          <Heading fit>🕴️ WebGazer + React...?? 🕴️</Heading>
        </Slide>
        <Slide
          bgImage={images.catHuggingStuffy}
          style={{
            backgroundImage: `url(${images.xcoffee})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        >
          <Heading fit textColor="primary">
            the lifecycle is your
          </Heading>
          <Heading fit textColor="primary">
            friend
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-react-1.example")}
          ranges={[
            { loc: [0, 0], title: "WebGazer in React" },
            { loc: [0, 1], note: "component class" },
            {
              loc: [4, 9],
              note: "initial state"
            },
            {
              loc: [11, 12],
              note: "first mount = hook for WebGazer setup"
            },
            {
              loc: [13, 30],
              note: "set the gaze listener"
            },
            {
              loc: [23, 28],
              note: "but for one difference"
            },
            {
              loc: [41, 47],
              note: "render the state"
            }
          ]}
        />
        <Slide>
          <WebGazer showPredictionPoints={false} />
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-react-2.example")}
          ranges={[
            { loc: [0, 0], title: "clean up!" },
            { loc: [33, 36], note: "remove listener & end webcam session" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-react-3.example")}
          ranges={[
            { loc: [0, 0], title: ".showPredictionPoints()" },
            {
              loc: [12, 32]
            },
            {
              loc: [30, 31],
              note: "pass `true` to showPredictionPoints()"
            },
            {
              loc: [35, 39],
              note: "pass `false` to cleanup"
            }
          ]}
        />
        <Slide>
          <WebGazer showPredictionPoints />
        </Slide>
        <Slide bgColor="quartenary">
          <Text lineHeight={1.5} textColor="secondary">
            <S type="italic">partner-less</S>
            <br />partner-assisted scanning
          </Text>
          <Heading fit lineHeight={1.5} textColor="secondary">
            implementation (sketch)
          </Heading>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1.5}>
            the partner's role
          </Heading>
          <Text>1️⃣ display the frequency-ordered alphabet for reference</Text>
        </Slide>
        <Slide bgImage={images.esaReference}>
          <div style={{ height: "100vh", width: "100vw" }}>
            <Link
              href="https://commons.wikimedia.org/w/index.php?curid=5459869"
              target="_blank"
              textColor="primary"
              textSize="0.5em"
              style={{ position: "fixed", top: "1rem", right: "0" }}
            >
              Image from <em>The Diving Bell &amp; The Butterfly</em> (Fair Use)
            </Link>
          </div>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <Heading fit lineHeight={1.5}>
            English frequency-ordered alphabet
          </Heading>
          <Layout>
            <Fill>
              <FreqOrderedLetters locale="en" />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1.5}>
            the partner's role
          </Heading>
          <Text>2️⃣ loop through the letters</Text>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1.5}>
            the partner's role
          </Heading>
          <Text>3️⃣ record the selected letters</Text>
        </Slide>
        <Slide
          style={{
            backgroundImage: `url(${images.blinkUISketch})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/scanner-react-1.example")}
          ranges={[
            { loc: [0, 0], title: "React sketch: Scanner" },
            {
              loc: [33, 36],
              note: "(default) props: freq-ordered alphabet"
            },
            {
              loc: [4, 8],
              note: "state: currentLetter & selectedLetter"
            },
            {
              loc: [10, 31],
              note: "entire render"
            },
            {
              loc: [18, 21],
              note: "child #1: CurrentLetter"
            },
            {
              loc: [21, 25],
              note: "child #2: FreqOrderedAlphabet"
            },
            {
              loc: [25, 28],
              note: "child #3: SelectedLetters"
            }
          ]}
        />
        <Slide bgColor="quartenary">
          <Text lineHeight={1.5} textColor="secondary">
            <S type="italic">partner-less</S>
            <br />partner-assisted scanning
          </Text>
          <Heading fit lineHeight={1.5} textColor="secondary">
            implementation (code)
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
