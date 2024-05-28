import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
  let [todos, setTodos] = useState(["Lunch", "Dinner", "Snacks"]);
  return (
    <div className="container mt-5">
      <Input />
      <List todos={todos} />
    </div>
  );
}
