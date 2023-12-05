import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task]
    setTodos(newTodos)
    setTask("")
  };

  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue)
    setTodos(newTodos)
  }

  const editHandler = (indexValue) => {
    const findTodo = todos.find((todo, index) => index === indexValue)
    setTask(findTodo)
    deleteHandler(indexValue)
  }

  return (
    <div className="App">
      <div className="todo-container">
        <div>
          <div>
            <h2 className="todo-heading">What's the plan for Today?</h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className="input-container">
              <input
                type="text"
                name="text"
                placeholder="Add a Todo"
                className="input-text"
                value={task}
                onChange={changeHandler}
              />
              <input
                type="submit"
                name="Add Todo"
                value="Add Todo"
                className="input-btn"
              />
            </div>
          </form>
        </div>
        <TodoList todolist={todos} deleteHandler={deleteHandler} editHandler={editHandler} />
      </div>
    </div>
  );
}

export default App;
