import React from "react";

const Todo = ({text, id}) => {
  return (
    <div className="todo">
      <button className="complete-btn">
        <i className="fas fa-check-circle" />
      </button>
      <li className="todo-item" />{text}
      <button className="trash-btn">
        <i className="fa fa-minus-circle" />
      </button>
    </div>
  );
};

export default Todo;
