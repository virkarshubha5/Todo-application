import axios, { AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
  headers: {
    "Content-type": "todo/json",
  },
});
export default apiClient;