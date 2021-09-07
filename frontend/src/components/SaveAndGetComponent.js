import axiosInstance from "../helper/axiosConfig"
import { saveAll, getAll } from "../utils/apiActions"

const SaveAndGetComponent = (props) => {

  const {tasks, setTasks} = props

  const saveAction = () => {
    saveAll(tasks)
    .then(r => console.log(r.data))
  }

  const getAction = () => {
    getAll()
    .then(r => {
      const loadTasks = r.data.map(e =>( {
        id: e.id,
        description: e.description,
        done: e.done,
        stageDescription: ""
      }
      ))
      setTasks(loadTasks)
    })


  }

  return(
    <>
      <div className="col">
        <div className="row p-3">
          <button type="button" className="btn btn-secondary" onClick={saveAction}>Salvar Tasks</button>
        </div>
      </div>
      <div className="col">
        <div className="row p-3">
          <button type="button" className="btn btn-secondary" onClick={getAction}>Recuperar Tasks</button>
        </div>
      </div>
    </>
  )

}

export default SaveAndGetComponent;