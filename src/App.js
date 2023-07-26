import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>My ToDo List </h1>
      </header>
      <Form 
      inputText={inputText} 
      setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
