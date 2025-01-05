import React, { useState } from 'react';
import './AddTodo.css';

interface AddTodoProps {
  addTodo: (todo: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };

  return (
    <form className="add-todo" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Add a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-button" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddTodo;
