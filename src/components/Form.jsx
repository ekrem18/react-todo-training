import React from 'react'

const Form = ({inputText, setInputText}) => {
    const inputTextHandle = (e)=>{
        setInputText(e.target.value)
        console.log(e.target.value);
    }

    const submitTodoHandle= (e)=>{
        e.preventDefault()
        console.log(inputText);
    }
  return (
    <form>
  <div className="search">
    <input value={inputText} type="text" className="todo-input" placeholder="Add a Task" onChange={inputTextHandle}/>
    <button className="todo-button" type="submit" onClick={submitTodoHandle}>
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