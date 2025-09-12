import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList.jsx';

describe('TodoList Component Tests', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Read requirements/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/What needs doing/i), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText(/Add/i));
    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Read requirements/i);
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const firstDelete = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(firstDelete);
    expect(screen.queryByText(/Read requirements/i)).not.toBeInTheDocument();
  });
});