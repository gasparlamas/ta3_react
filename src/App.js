import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

const TodoList = () => {
  const [tasks, setTasks] = useState([
    "Limpiar",
    "Cocinar",
    "Barrer",
    "Doblar",
    "Colgar",
  ]);

  const [newTask, setNewTask] = useState("");
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };


  const agregarTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); 
    }
  };
  const borrarTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="lista">
      <Card>
        <h2>Lista de tareas:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{""}
              <button onClick={() => borrarTask(index)}>Borrar tarea</button>
            </li>
          ))}
        </ul>
        <label>
          Tarea a agregar:{" "}
          <input value={newTask} onChange={handleInputChange} />
        </label>
        <button onClick={agregarTask}>Agregar tarea</button>
      </Card>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}


export default App;

