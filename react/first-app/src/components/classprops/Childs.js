import React, { Component } from "react";

export default class Childs extends Component {
  render() {
    return (
      <div>
        <h1>child Class Component</h1>
        {/* <h1>{this.props.componentName}</h1>
        <h1>Name :-{this.props.name}</h1> */}

        {this.props.children}
      </div>
    );
  }
}
