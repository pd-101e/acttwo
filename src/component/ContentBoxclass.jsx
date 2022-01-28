import React, { Component } from "react";

export default class ContentBoxclass extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  handleclicki = () => {
    if (this.state.data >= 0) {
      this.setState({ data: this.state.data + 1 });
    }
  };
  handleclickd = () => {
    if (this.state.data > 0) {
      this.setState({ data: this.state.data - 1 });
    }
  };
  render() {
    return (
      <div>
        <h3>Class Component</h3>
        <input type="text" value={this.state.data}></input>
        <br></br>
        <button onClick={this.handleclicki} value={this.state.data}>
          increment
        </button>
        <button onClick={this.handleclickd} value={this.state.data}>
          decrement
        </button>
      </div>
    );
  }
}
