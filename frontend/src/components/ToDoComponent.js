const ToDoComponent = (props) => {
  const {tasks, setTasks} = props;

  const handleEditStaged = ({target}) => {
    const {id, value} = target;
    const alterValue = tasks.map(e => {
      if (e.id === +id) {
        e.stageDescription = value;
      }
      return e;
    })
    setTasks(alterValue);
  }

  const editAction = ({target}) => {
    const {id} = target;
    const alterValue = tasks.map(e => {
      if (e.id === +id) {
        e.description = e.stageDescription;
        e.stageDescription = ""
      }
      return e;
    })
    setTasks(alterValue);
  }

  const removeAction = ({target}) => {
    const {id} = target;
    const alterValue = tasks.filter(e => e.id !== +id)
    setTasks(alterValue);
  }

  const moveAction = ({target}) => {
    const {id} = target;
    const alterValue = tasks.map(e => {
      if (e.id === +id) {
        e.done = !e.done;
      }
      return e;
    })
    setTasks(alterValue);
  }

  return(
    tasks.map((element) => {
      if (!element.done) {
        return(
          <li key={element.id}> 
            <input type="checkbox" name={element.description} id={element.id} onChange={moveAction} checked={element.done}/>
            {element.description}
            <input type="text" id={element.id} value={element.stageDescription} onChange={handleEditStaged}/>
            <button type="button" id={element.id} onClick={editAction}>Editar</button>
            <button type="button" id={element.id} onClick={removeAction}>Excluir</button>
          </li>
        )
      }
    })
  )

}

export default ToDoComponent;