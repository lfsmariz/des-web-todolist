import { useState } from "react";
import DoneComponent from "../components/DoneComponent";
import SaveAndGetComponent from "../components/SaveAndGetComponent";
import ToDoComponent from "../components/ToDoComponent";

const ToDoPage = () => {

  const initialStateTask = []
  const initialCount = 1;
  const initialInput = "";

  const [tasks, setTasks] = useState(initialStateTask)
  const [input, setInput] = useState(initialInput)
  const [count, setCount] = useState(initialCount);

  const handleInput = ({target}) => {
    const {value} = target;
    setInput(value)
  }

  const addTask = () => {
    const newTask = {
      id: count,
      description: input,
      done: false,
      stageDescription: ""
    }

    setTasks([...tasks, newTask])
    setInput(initialInput)
    setCount(count + 1)
  }


  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <p>Adaptado por Luiz Filipe S Mariz, 2021</p>
      <input type="text" placeholder="digite aqui" value={input} onChange={handleInput}/>
      <button type="button" onClick={addTask}>+</button>

      <h2>A fazer</h2>
        <ToDoComponent tasks={tasks} setTasks={setTasks} />
      <h2>Feito</h2>
        <DoneComponent tasks={tasks} setTasks={setTasks}/>

      <div>
        <h3>Ações padrão</h3>
        <SaveAndGetComponent tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default ToDoPage;