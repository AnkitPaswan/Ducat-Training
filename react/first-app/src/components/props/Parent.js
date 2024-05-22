import Button from "./Button";
import Child from "./Child";

// export default function Parent() {
//   let firstName = "Ankit";
//   return (
//     <div>
//       <h1>Parent component</h1>
//       <Child componentName="child" firstName={firstName} />
//     </div>
//   );
// }

//child to parent
// export default function Parent() {
//   function childToParent(value) {
//     console.log(value);
//   }

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       <Child childToParent={childToParent} />
//     </div>
//   );
// }

//children
export default function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child />
      {/* <Child>
        <Button />
      </Child> */}
    </div>
  );
}
