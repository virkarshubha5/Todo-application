import http from "@/http-common";
class Todoservice {
  getAll(): Promise<any> {
    return http.get("/todo");
  }
  get(id: any): Promise<any> {
    return http.get(`/todo/${id}`);
  }
  create(data: any): Promise<any> {
    return http.post("/todo", data);
  }
  update(id: any, data: any): Promise<any> {
    return http.put(`/todo/${id}`, data);
  }
  delete(id: any): Promise<any> {
    return http.delete(`/todo/${id}`);
  }
  deleteAll(): Promise<any> {
    return http.delete(`/todo`);
  }
  findByTitle(title: string): Promise<any> {
    return http.get(`/todo?title=${title}`);
  }
}
export default new Todoservice();