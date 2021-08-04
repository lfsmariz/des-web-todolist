import axiosInstance from "../helper/axiosConfig"

export const saveAll = (tasks) => {
  const listTasks = tasks.map(e => (
    {
      description: e.description,
      done: e.done
    } 
  ))

  const payload = {todos: listTasks}
  
  return axiosInstance.post("/setall", payload)
}

export const getAll = () => {
  return axiosInstance.get("/getall")
}