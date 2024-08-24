
import { Injectable } from '@angular/core';
import { TodoItems } from '../interfaces/todo-items';
import { User } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private todoBaseUrl = 'http://localhost:3000/todo';
 private todoUsersUrl = 'http://localhost:3000/todoUsers';
  constructor(private http: HttpClient) { }

 getTodo() {
  return this.http.get<TodoItems[]>(this.todoBaseUrl);
 }
  setTodo(data:TodoItems){
   return this.http.post<TodoItems>(this.todoBaseUrl,data);
  }
  deleteTodo(id: TodoItems['id']){
    return this.http.delete(`${this.todoBaseUrl}/${id}`);
  }
  updateTodo(id: TodoItems['id'],data:TodoItems){
    return this.http.put(`${this.todoBaseUrl}/${id}`, data);
  }

  getTodoUsers(){
    return this.http.get<User[]>(this.todoUsersUrl)
  }

  addTodoUsers(user: User){
    return this.http.post<User>(this.todoUsersUrl, user)
  }


}
