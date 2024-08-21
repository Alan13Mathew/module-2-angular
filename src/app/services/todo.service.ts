
import { Injectable } from '@angular/core';

import { TodoItems } from '../interfaces/todo-items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todoBaseUrl = 'http://localhost:3000/todo';
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
}
