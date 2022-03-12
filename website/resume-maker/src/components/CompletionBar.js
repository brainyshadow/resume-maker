import { Component } from "react";
import "../App.css";

class CompletionBar extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      progress: props.progress,
    };
    this.state = initialState;
  }

  render() {
    const progress = this.state.progress;
    return (
      <>
        <div className="progress-base">
          <div className="progress-status" style={{ width: progress }}>
          </div>
        </div>
      </>
    );
  }
}

export default CompletionBar;
