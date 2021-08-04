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
    <div>
      <button type="button" onClick={saveAction}>Salvar Tasks</button>
      <button type="button" onClick={getAction}>Recuperar Tasks</button>
    </div>
  )

}

export default SaveAndGetComponent;