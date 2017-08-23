import React from "react";
import _ from "lodash";

/* eslint-disable no-undef */

class WebGazer extends React.Component {
  static propTypes = {
    showPredictionPoints: React.PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);

    this.state = { blinks: 0, x: null, y: null };
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
        const blinked = _.get(data, ["all", 0, "blinked"], false);
        this.setState((state) => ({
          blinks: blinked ? state.blinks + 1 : state.blinks,
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
    const { blinks, x, y } = this.state;
    return (
      <div style={{ fontSize: "7.5rem" }}>
        <div>{`[${x}, ${y}]`}</div>
        <div>
          {blinks > 0 ? "blinked at least once!" : "no blinks (yet)"}
        </div>
      </div>
    );
  }
}

export default WebGazer;
