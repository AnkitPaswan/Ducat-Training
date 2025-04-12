import React, { useContext } from 'react'

import { store } from '../store/store'

// export default function App() {

//     let ctx = useContext(store);

//     const increment = () => {

//     }
//     const decrement = () => {

//     }

//     return (
//         <div>
//             {/*using store.Consumer */}
//             {/* <store.Consumer>
//                 {(ctx) => {
//                     return <p>Counter :{ctx.counter}</p>
//                 }}
//             </store.Consumer> */}

//             {/*using hook */}
//             <p>Counter :{ctx.counter}</p>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Deccrement</button>
//         </div>

//     )
// }


export default function App() {

    let ctx = useContext(store);

    return (

        <div>

            <p>Counter :{ctx.counter}</p>
            <button onClick={ctx.increment}>Increment</button>
            <button onClick={ctx.decrement}>Deccrement</button>
        </div>

    )
}

