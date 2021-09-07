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
    <div className="container my-5">
      <div className="row">
        <div className="col center-text">
          <h1>Lista de Tarefas</h1>
          <p>Adaptado por Luiz Filipe S Mariz, 2021</p>
        </div>
        </div>
        <form>
          <div className="row my-3">
            <input type="text" className="form-control" placeholder="digite aqui" value={input} onChange={handleInput}/>
          </div>
          <div className="row my-3">
            <button type="button" className="btn btn-success" onClick={addTask}>Adicionar Item</button>
          </div>
          <div className="row my-3">
            <h3 className="center-text">Ações padrão</h3>
            <SaveAndGetComponent tasks={tasks} setTasks={setTasks}/>
          </div>
        </form>
        <div className="row mt-5">
          <h2 className="center-text" >Tarefas a Fazer</h2>
        </div>
        <ToDoComponent tasks={tasks} setTasks={setTasks} />
        <div className="row mt-5">
          <h2 className="center-text" >Tarefas Feitas</h2>
        </div>
        <DoneComponent tasks={tasks} setTasks={setTasks}/>

      
    </div>
  )
}

export default ToDoPage;