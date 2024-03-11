import { useState } from "react";
import ToDoList from "./todo";
import TodoList from "./todo";

function App() {
  const anyNumber = 15;

  return (
    <>
      {/* <h1> React Course:{anyNumber} </h1>
      <h2>Counter Values: </h2>
      <button>Add Value</button>
      <button>Remove Value</button>
      <p>Footer: </p> */}
      <TodoList />
    </>
  );
}

export default App;
