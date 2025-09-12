import React from "react";
import TodoList from "./components/TodoList";  // ✅ import TodoList

function App() {
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <TodoList />   {/* ✅ use TodoList */}
    </div>
  );
}

export default App;
