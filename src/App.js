import "./styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      itsRaining: true
    };
  }

  probability = () => {
    if (this.state.itsRaining) {
      return "Yes";
    } else {
      return "No";
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Is it raining today ? {this.probability()}</h1>
      </div>
    );
  }
}

export default App;
