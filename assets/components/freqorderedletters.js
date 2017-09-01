import React from "react";

const FreqOrderedLetters = (props) => {
  const { letters, locale } = props;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {letters[locale].map((letter, i) => {
        let width = "11.1111111111%";
        if (i > 8 && i <= 16) {
          width = "12.5%";
        }
        return (
          <div
            key={letter}
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              height: "6rem",
              width
            }}
          >
            {letter}
          </div>
        );
      })}
    </div>
  );
};

FreqOrderedLetters.defaultProps = {
  letters: {
    de: [
      "E",
      "N",
      "I",
      "R",
      "S",
      "T",
      "A",
      "H",
      "D",
      "U",
      "L",
      "C",
      "G",
      "M",
      "O",
      "B",
      "W",
      "F",
      "K",
      "Z",
      "V",
      "P",
      "Ü",
      "Ä",
      "ß",
      "Ö",
      "J",
      "Y",
      "X"
    ],
    en: [
      "E",
      "T",
      "A",
      "O",
      "I",
      "N",
      "S",
      "R",
      "H",
      "D",
      "L",
      "U",
      "C",
      "M",
      "F",
      "Y",
      "W",
      "G",
      "P",
      "B",
      "V",
      "K",
      "X",
      "Q",
      "J",
      "Z"
    ],
    fr: [
      "E",
      "S",
      "A",
      "R",
      "I",
      "N",
      "T",
      "U",
      "L",
      "O",
      "M",
      "D",
      "P",
      "C",
      "F",
      "B",
      "V",
      "H",
      "G",
      "J",
      "Q",
      "Z",
      "Y",
      "X",
      "K",
      "W"
    ]
  }
};

FreqOrderedLetters.propTypes = {
  letters: React.PropTypes.shape({
    en: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    fr: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  }).isRequired,
  locale: React.PropTypes.oneOf(["en", "fr"]).isRequired
};

export default FreqOrderedLetters;
