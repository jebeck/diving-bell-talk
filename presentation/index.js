// Import React
import React from "react";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  benLomond: require("../assets/images/ben-lomond.png"),
  bestCoverWebcam2: require("../assets/images/best-cover-webcam2.png"),
  blinkUISketch: require("../assets/images/blink-UI-sketch.png"),
  brixtonTreadmill: require("../assets/images/treadmill-Brixton-prison.jpg"),
  chatroulette: require("../assets/images/chatroulette.png"),
  diveIn: require("../assets/images/dive-in.gif"),
  divingBell: require("../assets/images/diving-bell.jpg"),
  divingBellLanding: require("../assets/images/diving-bell-landing.png"),
  esaReference: require("../assets/images/ESA-reference.jpg"),
  hi: require("../assets/images/hi.gif"),
  jdbDictating: require("../assets/images/jdb-dictating.jpg"),
  jdbWithKids: require("../assets/images/jdb-with-kids.jpg"),
  moon: require("../assets/images/moon.jpg"),
  okGoTreadmill: require("../assets/images/ok-go-treadmill.gif"),
  prestonTreadmill: require("../assets/images/treadmill-Preston-prison.jpg"),
  telegraphTapeWebcam: require("../assets/images/telegraph-tape-webcam.png"),
  treadmill: require("../assets/images/treadmill.jpg"),
  webcam: require("../assets/images/webcam.jpg"),
  webgazer: require("../assets/images/webgazer.png"),
  webgazerDemo1: require("../assets/images/webgazer-demo1.gif"),
  webgazerDemo2: require("../assets/images/webgazer-demo2.gif"),
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
            escaping the diving bell
          </Heading>
        </Slide>
        <Slide textSize="2.5rem">
          <Heading fit size={1}>
            slide deck is online!
          </Heading>
          <Link
            href="http://janabeck.com/diving-bell-talk/nightly-build/"
            target="_blank"
            textColor="secondary"
          >
            janabeck.com/diving-bell-talk/nightly-build/
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
        <Slide notes="<div>not talking about dataviz today</div><br/><div>talking about a side project, but first a little story</div>">
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
        </Slide>
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.brixtonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.williamCubitt})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.brixtonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.prestonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide bgImage={images.benLomond} />
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
        />
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
          <Appear>
            <Text textColor="tertiary">(yes, I know this is blank)</Text>
          </Appear>
        </Slide>
        <Slide />
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
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="primary">
              Paralyzed from head to toe, the patient, his mind intact, is
              imprisoned inside his own body, unable to speak or move.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="By blinking his left eye many *many* times, Bauby dictated his memoirs, published as *The Diving Bell & the Butterfly*. He died of pneumonia—suddenly and tragically—only two days after the book was published."
        >
          <BlockQuote>
            <Quote textColor="primary">
              In my case, blinking my left eyelid is my only means of
              communication.
            </Quote>
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
          </BlockQuote>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="You read off the alphabet (ESA version, not ABC) until, with a blink of my eye, I stop you at the letter to be noted. The maneuver is repeated for the letters that follow, so that fairly soon you have a whole word, and then fragments of more or less intelligible sentences. That, at least, is the theory."
        >
          <BlockQuote>
            <Quote textColor="primary">
              You read off the alphabet (ESA version, not ABC) until, with a
              blink of my eye, I stop you at the letter to be noted.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="'The jumbled appearance of my chorus line,' he wrote, 'stems not from chance but from cunning calculation. More than an alphabet, it is a hit parade in which each letter is placed according to the frequency of its use in the French language.'"
          textColor="primary"
        >
          <Heading fit lineHeight={1.5}>
            French frequency-ordered alphabet
          </Heading>
          <Layout>
            <Fill>
              <FreqOrderedLetters locale="fr" />
            </Fill>
          </Layout>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Nervous visitors come most quickly to grief. They reel off the alphabet tonelessly, at top speed, jotting down letters almost at random; and then, seeing the meaningless result, exclaim, “I’m an idiot!” But in the final analysis, their anxiety gives me a chance to rest, for they take charge of the whole conversation, providing both questions and answers, and I am spared the task of holding up my end."
        >
          <BlockQuote>
            <Quote textColor="primary">
              Nervous visitors come most quickly to grief.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Reticent people are much more difficult. If I ask them, “How are you?” they answer, “Fine,” immediately putting the ball back in my court. With some, the alphabet becomes an artillery barrage, and I need to have two or three questions ready in advance in order not to be swamped."
        >
          <BlockQuote>
            <Quote textColor="primary">
              Reticent people are much more difficult.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="Meticulous people never go wrong: they scrupulously note down each letter and never seek to unravel the mystery of a sentence before it is complete. Nor would they dream of completing a single word for you. Unwilling to chance the smallest error, they will never take it upon themselves to provide the “room” that follows “mush,” the “ic” that follows “atom,” or the “nable” without which neither “intermi” nor “abomi” can exist. Such scrupulousness makes for laborious progress, but at least you avoid the misunderstandings in which impulsive visitors bog down when they neglect to verify their intuitions."
        >
          <BlockQuote>
            <Quote textColor="primary">
              Meticulous people never go wrong...
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          bgImage={images.moon}
          notes="Yet I understood the poetry of such mind games one day when, attempting to ask for my glasses (lunettes), I was asked what I wanted to do with the moon (lune)."
        />
        <Slide
          bgColor="secondary"
          notes="the title The Diving Bell and the Butterfly is metaphorical"
        >
          <Heading fit textColor="primary">
            <S type="italic">The Diving Bell and the Butterfly</S>
          </Heading>
        </Slide>
        <Slide
          bgColor="secondary"
          notes="The treetops foaming like surf against glass building fronts, wisps of cloud in the sky. Nothing was missing, except me. I was elsewhere."
        >
          <Heading size={2} textColor="quartenary">
            (the butterfly)
          </Heading>
          <BlockQuote>
            <Quote textColor="primary">
              Nothing was missing, except me. I was elsewhere.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide
          notes="<div>(explain what a diving bell is)</div><br/><div>In his memoirs, Bauby described his diving bell directly: 'The identity badge pinned to Sandrine’s white tunic says “Speech Therapist,” but it should read “Guardian Angel.” When Sandrine knocks and pokes her small chipmunk face through the door, at once it sends all gloomy thoughts packing. The invisible and eternally imprisoning diving bell seems less oppressive.'</div><br/><div>story of how I watched the film</div>"
          style={{
            backgroundImage: `url(${images.divingBell})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <Heading size={2} style={{ marginTop: "-18rem" }} textColor="primary">
            (the diving bell)
          </Heading>
        </Slide>
        <Slide
          style={{
            backgroundImage: `url(${images.divingBellLanding})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="quartenary"
          notes="My app uses blinking to select a letter, but I've built it for blinking with two eyes even though Bauby had to use only his left, because not all of us are equally gifted in the winking department"
        >
          <Heading size={3}>😮&nbsp;&nbsp;😮&nbsp;&nbsp;😮</Heading>
          <Heading fit lineHeight={2} textColor="secondary">
            <S type="italic">partner-less</S>
            <br />partner-assisted scanning
          </Heading>
          <Heading size={3}>😮&nbsp;&nbsp;😮&nbsp;&nbsp;😮</Heading>
        </Slide>
        <Slide
          style={{
            backgroundImage: `url(${images.webgazer})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
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
        <Slide bgImage={images.webgazerDemo1} />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-simple-end.example")}
          ranges={[
            { loc: [0, 1], title: "clean up!", note: "such complexity!" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-simple-start-2.example")}
          ranges={[
            { loc: [0, 0], title: ".showPredictionPoints()" },
            {
              loc: [8, 9],
              note: "insert `showPredictionPoints` call before `begin`"
            }
          ]}
        />
        <Slide
          bgImage={images.webgazerDemo2}
          notes="(remember to talk about how WebGazer uses clicks and cursor movements!)"
        />
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
        <Slide bgImage={images.esaReference} />
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
        <Slide bgColor="secondary" textColor="primary">
          <Heading fit lineHeight={1.5}>
            German frequency-ordered alphabet
          </Heading>
          <Layout>
            <Fill>
              <FreqOrderedLetters locale="de" />
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
            { loc: [0, 0], title: "implementation sketch" },
            { loc: [0, 1] },
            {
              loc: [33, 36],
              note: "(default) props: freq-ordered alphabet"
            },
            {
              loc: [4, 8],
              note: "state: currentLetter & selectedLetter"
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
            loop to update current letter
          </Heading>
        </Slide>
        <Slide bgColor="quartenary">
          <Text lineHeight={1.5} textColor="secondary">
            <S type="italic">partner-less</S>
            <br />partner-assisted scanning
          </Text>
          <Heading fit lineHeight={1.5} textColor="secondary">
            letter selection via blink detection
          </Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-simple-start.example")}
          ranges={[
            { loc: [1, 8], title: "blink detection", note: "how to even??" }
          ]}
        />
        <Slide bgImage={images.diveIn}>
          <Heading fit textColor="primary">
            WebGazer: let's dive in!
          </Heading>
        </Slide>
        <Slide>
          <Heading
            lineHeight={1.5}
            size={3}
            style={{ textTransform: "uppercase" }}
            textColor="tertiary"
          >
            Achtung!
          </Heading>
          <Heading>⚠️&nbsp;&nbsp;⚠️&nbsp;&nbsp;⚠️</Heading>
          <Heading fit lineHeight={1.25}>
            hacks ahead
          </Heading>
          <Heading>⚠️&nbsp;&nbsp;⚠️&nbsp;&nbsp;⚠️</Heading>
        </Slide>
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-blinkDetector.example")}
          ranges={[
            {
              loc: [0, 0],
              title: "BlinkDetector.detectBlink"
            },
            {
              loc: [1, 2],
              note: "receives eyesObj"
            },
            { loc: [23, 24], note: "returns eyesObj" },
            { loc: [18, 22], note: "mutates eyesObj" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-main-loop.example")}
          ranges={[
            { loc: [0, 0], title: "webgazer's main loop" },
            {
              loc: [0, 1],
              note: "loop function"
            },
            {
              loc: [28, 31],
              note: "called 60 times per second"
            },
            {
              loc: [1, 2],
              note: "gets prediction"
            },
            { loc: [5, 6], note: "fires gaze listener" },
            { loc: [5, 6], note: "goal: access blinks via `gazeData`" }
          ]}
        />
        <CodeSlide
          lang="js"
          code={require("raw-loader!../assets/code/webgazer-RidgeRegThreaded-predict.example")}
          ranges={[
            { loc: [0, 0], title: "hoist blink data" },
            { loc: [1, 2], note: "function that receives eyesObj" },
            { loc: [9, 12], note: "add `blinked` property" }
          ]}
        />
        <Slide
          style={{
            backgroundColor: themeColors.primary,
            backgroundImage: `url(${images.hi})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          style={{
            backgroundColor: "#e5d8c6",
            backgroundImage: `url(${images.brixtonTreadmill})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="tertiary"
          style={{
            backgroundImage: `url(${images.webcam})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="tertiary"
          style={{
            backgroundImage: `url(${images.chatroulette})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="tertiary"
          style={{
            backgroundImage: `url(${images.telegraphTapeWebcam})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="tertiary"
          style={{
            backgroundImage: `url(${images.bestCoverWebcam2})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }}
        />
        <Slide
          bgColor="tertiary"
          style={{
            backgroundImage: `url(${images.xcoffee})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 80%"
          }}
        />
        <Slide bgColor="tertiary">
          <Layout style={{ alignItems: "center" }}>
            <Fill>
              <Image src={images.treadmill} width={400} />
            </Fill>
            <Heading size={3} textColor="primary">
              &nbsp;vs.&nbsp;
            </Heading>
            <Fill>
              <Image src={images.webcam} width={400} />
            </Fill>
          </Layout>
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
          <Heading fit>References &amp; Resources</Heading>
          <List>
            <ListItem>
              <Link
                href="https://github.com/jebeck/diving-bell"
                target="_blank"
              >
                divingbell.io code on GitHub
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
                target="_blank"
              >
                "The Dark History of the Treadmill"
              </Link>
            </ListItem>
            <ListItem>
              The Trojan Room Coffee Machine
              <List>
                <ListItem style={{ paddingLeft: "4rem" }}>
                  <Link
                    href="https://www.cl.cam.ac.uk/coffee/coffee.html"
                    target="_blank"
                  >
                    main site
                  </Link>
                </ListItem>
                <ListItem style={{ paddingLeft: "4rem" }}>
                  <Link
                    href="https://www.cl.cam.ac.uk/coffee/qsf/coffee.html"
                    target="_blank"
                  >
                    "biography"
                  </Link>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading fit lineHeight={1.5}>
            🙌 Thank you! 🙌
          </Heading>
          <Heading fit lineHeight={1.5}>
            Try it yourself @
          </Heading>
          <Heading size={2}>
            <Link href="https://divingbell.io">divingbell.io</Link>
          </Heading>
        </Slide>
        <Slide>
          <Heading>Image credits</Heading>
          <List>
            <ListItem textSize="1.5rem">
              <Link
                href="https://www.flickr.com/photos/29638108@N06/5618665304/in/faves-134718242@N08/"
                target="_blank"
              >
                Modern treadmill image by Jennifer C. (CC BY 2.0)
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
                target="_blank"
              >
                Brixton prison treadmill etching via the BBC
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="http://www.bbc.co.uk/programmes/articles/4w8bVrKRqQDP4fKl0b8XzdW/the-dark-history-of-the-treadmill"
                target="_blank"
              >
                William Cubitt image via the BBC
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="https://www.flickr.com/photos/rpsmithbarney/4266533201/in/faves-134718242@N08/"
                target="_blank"
              >
                Preston prison treadmill: public domain via the Preston Digital
                Archive
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="https://www.flickr.com/photos/8810508@N06/7239324110/in/faves-134718242@N08/"
                target="_blank"
              >
                Moon picture by hharryus (CC BY 2.0)
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="https://commons.wikimedia.org/wiki/File:Alexander_the_Great_diving_NOAA.jpg"
                target="_blank"
              >
                Ancient diving bell illustration via Wikimedia Commons
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="https://commons.wikimedia.org/w/index.php?curid=5459869"
                target="_blank"
              >
                Image from <em>The Diving Bell &amp; The Butterfly</em>
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="https://commons.wikimedia.org/wiki/File:Webcam000c1.jpg"
                target="_blank"
              >
                Early 2000s webcam: public domain image via Wikimedia Commons
              </Link>
            </ListItem>
            <ListItem textSize="1.5rem">
              <Link
                href="http://www.cl.cam.ac.uk/coffee/qsf/coffee.html"
                target="_blank"
              >
                First webcam image from "The Trojan Room Coffee Pot Biography"
              </Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
