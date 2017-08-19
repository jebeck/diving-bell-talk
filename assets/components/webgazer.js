import React from "react";

/* eslint-disable no-undef */

class WebGazer extends React.Component {
  static propTypes = {
    showPredictionPoints: React.PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);

    this.state = { x: null, y: null };
  }

  componentDidMount() {
    webgazer
      .setRegression("threadedRidge")
      .setTracker("clmtrackr")
      .setGazeListener((data) => {
        if (data === null) {
          return;
        }
        const { x, y } = data;
        this.setState(() => ({
          x,
          y
        }));
      })
      .showPredictionPoints(this.props.showPredictionPoints)
      .begin();
  }

  componentWillUnmount() {
    webgazer.showPredictionPoints(false).clearGazeListener().end();
  }

  render() {
    return (
      <div style={{ fontSize: "10rem" }}>{`[${this.state.x}, ${this.state
        .y}]`}</div>
    );
  }
}

export default WebGazer;
