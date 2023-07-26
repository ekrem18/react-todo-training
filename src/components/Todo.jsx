import React from "react";

const Todo = () => {
  return (
    <div classname="todo">
      <button classname="complete-btn">
        <i classname="fas fa-check-circle" />
      </button>
      <li classname="todo-item" />
      <button classname="trash-btn">
        <i classname="fa fa-minus-circle" />
      </button>
    </div>
  );
};

export default Todo;
