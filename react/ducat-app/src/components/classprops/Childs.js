import React, { Component } from "react";

// export default class Childs extends Component {
//   componentDidMount() {
//     console.log(this.props);
//   }
//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <h1>child Class Component</h1>
//         {/* <h1>{this.props.componentName}</h1>
//         <h1>Name :-{this.props.name}</h1> */}

//         {this.props.children}
//       </div>
//     );
//   }
// }

//child to parent
export default class Childs extends Component {
  carName = "Maruti";

  componentDidMount = () => {
    console.log(this.props);
    this.props.childToParent(this.carName);
  };

  transferData = () => {
    this.props.childToParent(Math.random());
  };

  render() {
    return (
      <div>
        <h1>child Class Component</h1>
        {/* <button onClick={this.transferData.bind(this)}>Data Transfer</button> */}
        {/* <button onClick={this.transferData}>Data Transfer</button> */}
        <button onClick={() => this.transferData()}>Data Transfer</button>
      </div>
    );
  }
}
