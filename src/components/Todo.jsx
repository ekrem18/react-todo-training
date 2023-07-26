import React from "react";

const Todo = ({text, todos, setTodos,todo}) => {
    const deleteHandle=()=> {
        setTodos(todos.filter((e)=>e.id !== todo.id))

    }
  return (
    <div className="todo">
      <button className="complete-btn">
        <i className="fas fa-check-circle" />
      </button>
      <li className="todo-item" />{text}
      <button className="trash-btn" onClick={deleteHandle}>
        <i className="fa fa-minus-circle" />
      </button>
    </div>
  );
};

export default Todo;
