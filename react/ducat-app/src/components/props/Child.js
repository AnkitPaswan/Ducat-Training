// export default function Child(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>Child component</h1>
//       <h1>{props.componentName}</h1>
//       <h1>First Name: {props.firstName}</h1>
//     </div>
//   );
// }

//child to parent

// export default function Child(props) {
//   let carName = "TATA";

//   props.childToParent(carName);

//   function transferRandomNumber() {
//     props.childToParent(Math.random());
//   }

//   return (
//     <div>
//       <h1>Child Component</h1>

//       {/* automatically fire when component load */}
//       {/* <button onClick={transferRandomNumber()}>Transfer Random Number</button>
//       <button onClick={transferRandomNumber}>Transfer Random Number</button> */}
//       <button onClick={() => transferRandomNumber("ankit")}>
//         Transfer Random Number
//       </button>
//     </div>
//   );
// }

export default function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>Child Component</h1>
      {props.children}
    </div>
  );
}
