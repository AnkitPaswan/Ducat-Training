import React, { Component } from "react";
import Childs from "./Childs";
import Buttons from "./Buttons";

export default class Parents extends Component {
  render() {
    let name = "Ankit Paswan";
    return (
      <div>
        <h1>Parent Class Component</h1>
        {/* <Childs componentName="child" name={name} /> */}
        <Childs>
          <Buttons />
        </Childs>
      </div>
    );
  }
}
