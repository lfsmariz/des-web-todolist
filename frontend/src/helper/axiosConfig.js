import axios from "axios";

const url = "http://localhost:8080/todo"

const axiosInstance = axios.create({baseURL: url})

export default axiosInstance;