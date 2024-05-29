import React, { useState } from "react";
import Input from "./Input";
import List from "./List";

export default function App() {
  let [todos, setTodos] = useState([]);
  let [editData, setEditData] = useState({
    index: -1,
    data: ''
  });

  const addTodo = (value) => {
    setTodos([...todos, value])
    // console.log(value);
  }

  const deleteTodo = (value) => {
    let filterTodos = todos.filter((todo) => todo !== value);
    setTodos([...filterTodos])
  };

  const editTodo = (index, data) => {
    // console.log(index, data);
    setEditData({ index, data })
  }

  const updateTodo = (index, data) => {
    todos.splice(index, 1, data)
    setTodos([...todos]);

    setEditData({
      index: -1,
      data: ''
    })
  }

  return (
    <div className="container mt-5">
      <Input addTodo={addTodo} todos={todos} editData={editData} updateTodo={updateTodo} />
      <List todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} editData={editData} />
    </div>
  );
}
