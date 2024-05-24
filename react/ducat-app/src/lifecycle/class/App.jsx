// 24/05/24

import React, { Component } from 'react'

// //mounting
// export default class App extends Component {
//     //1 phase
//     constructor() {
//         super();
//         console.log("constructor called");

//         //2 states and props get
//         this.state = {
//             counter: 0
//         }
//     }

//     increment = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         })
//     }

//     //4
//     componentDidMount() {
//         console.log("componentDidMount called");
//         this.setState({ counter: 30 })
//     }

//     //when properly component loaded in ui // willUnmount phase
//     componentWillUnmount() {
//         console.log("componentWillUnmount called");
//     }

//     //3 phase
//     render() {
//         return (
//             <div>
//                 {console.log("render method called")}
//                 <p> lifecycle of components</p>
//                 <p>Counter : {this.state.counter}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }


//updating
export default class App extends Component {

    constructor() {
        super();

        //2 states and props get
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })

        this.forceUpdate()
    }

    //3
    shouldComponentUpdate(nextProps, nextState) {
        console.log("componentDidMount called");
        console.log(nextProps);
        console.log(nextState);

        return true
    }



    //4 phase
    render() {
        return (
            <div>
                {console.log("render method called")}
                <p> lifecycle of components</p>
                <p>Counter : {this.state.counter}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }

    // 5 phase
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        console.log(prevProps);
        console.log(prevState);

        return {
            prevProps,
            prevState
        }
    }

    //6 phase
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        console.log(prevProps);
        console.log({ prevState });
    }
}