import React, { Component } from 'react'

import { store } from "../store/store"

//store.consumer
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//                 <store.Consumer>
//                     {
//                         (ctx) =>
//                             <p>Counter :{ctx.counter}</p>
//                     }

//                 </store.Consumer>
//                 <button >Increment</button>
//                 <button >Deccrement</button>
//             </div>
//         )
//     }
// }



//context type
export default class App extends Component {

    static contextType = store;
    render() {
        return (
            <div>
                <p>Counter :{this.context.counter}</p>
                <button onClick={this.context.increment}>Increment</button>
                <button onClick={this.context.decrement} >Deccrement</button>
            </div>
        )
    }
}
