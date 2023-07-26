import React from 'react'

const Form = () => {
  return (
    <form>
  <div className="search">
    <input type="text" className="todo-input" placeholder="Add a Task" />
    <button className="todo-button" type="submit">
      <i className="fas fa-plus-circle" />
    </button>
  </div>
  <div className="select">
    <select name="todos" className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
  </div>
</form>

  )
}

export default Form