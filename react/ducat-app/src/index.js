import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Parent from "./components/props/Parent";
// import FunctionalComponent from "./components/FunctionalComponent";
// import ClassComponent from "./components/ClassComponent";
// import Parents from "./components/classprops/Parents";
// import App from "./components/class/App";
// import App from "./components/functional/App";
// import App from "./lifecycle/class/App";
// import App from "./lifecycle/functional/App";
// import App from "./images/App";
// import App from "./styles/App";
// import App from "./portals/App";
// import App from "./ref/functional/App";
// import App from "./ref/classComp/App";
// import App from "./sideeffect/App";
import App from "./reducer/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <FunctionalComponent> </FunctionalComponent> */}
    {/* <FunctionalComponent /> */}
    {/* <ClassComponent /> */}

    {/* <App /> */}
    {/* <Parents /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
