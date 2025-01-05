import React from 'react';
import './TodoItem.css';

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, deleteTodo }) => {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo}</span>
      <button className="delete-button" onClick={() => deleteTodo(index)}>
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
