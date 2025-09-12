import { useState } from 'react';
import AddTodoForm from './AddTodoForm.jsx';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read requirements', completed: false },
    { id: 2, text: 'Write code', completed: false },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}