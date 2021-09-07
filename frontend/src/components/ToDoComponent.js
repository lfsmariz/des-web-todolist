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

  const listItems = () => {
    return(
    tasks.map((element) => {
      if (!element.done) {
        return(
          <li key={element.id} className="list-group-item ">
            <div className="row justify-content-between align-items-center">
              <div className="col-1">
              <input type="checkbox" name={element.description} id={element.id} onChange={moveAction} checked={element.done} class="btn-check"/>
              <label class="btn btn-primary" for={element.id}>Fazer</label>
              </div>
              <div className="col-4">
                <p className="center-text">
                  {element.description}
                </p>
              </div>
              <div className="col-4">
              <input type="text" className="form-control" id={element.id} value={element.stageDescription} onChange={handleEditStaged}/>
              </div>
              <div className="col-2">
              <button type="button" id={element.id} className="btn btn-success w-100" onClick={editAction}>Editar</button>
              </div>

              <div className="col">
              <button type="button" id={element.id}  className="btn btn-danger" onClick={removeAction}>Excluir</button>
              </div>
            </div>
          </li>
        )
      }
    })
    )
  }

  return(
    <ul className="list-group list-group">
   { listItems()}
    </ul>
  )

}

export default ToDoComponent;