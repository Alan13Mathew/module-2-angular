import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { MatCardModule } from '@angular/material/card';
import { TodoItems } from '../../interfaces/todo-items';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [MatCardModule,MatCheckboxModule,MatSnackBarModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent implements OnInit {

constructor(private snackbar: MatSnackBar , private todoDataService: TodoService){}

 todos!: TodoItems[];

 addTodoData: TodoItems={
  todoName: '',
  todoDesc: '',
  completed: false
 };
 incompleteTasks!: TodoItems[];
  completedTasks!: TodoItems[];
  switchContent: boolean = false;
 
 ngOnInit(): void {
  this.displayTodo();
    }

    clearForm(){
      this.addTodoData.todoName = '';
      this.addTodoData.todoDesc = '';
      this.addTodoData.daily = false;
    }

    displayTodo(){
      this.todoDataService.getTodo().subscribe(result=>{
        this.todos = result;
        this.filterTasks();
       });
    }
    addTodo(){
      if (!this.addTodoData.todoName || !this.addTodoData.todoDesc) {
        this.snackbar.open('Please fill out both fields before adding a task.', 'Close', {
          duration: 3000, 
          verticalPosition: 'top', 
          horizontalPosition: 'center'
        });
        return;
      }
      this.todoDataService.setTodo(this.addTodoData).subscribe(() => {
        this.displayTodo();
        this.clearForm();
      });
    }
    updateTask(task: TodoItems) {
      this.todoDataService.updateTodo(task.id,task).subscribe(() => {
        this.filterTasks();
      });
    }
    filterTasks() {
      this.incompleteTasks = this.todos.filter(eachtodo =>
         !eachtodo.completed);
      this.completedTasks = this.todos.filter(eachtodo =>
         eachtodo.completed );
    }
    deleteTodo(id:TodoItems["id"]){
      this.todoDataService.deleteTodo(id).subscribe(()=>{
        this.displayTodo();
      });
    }


    tabSelect(){
      console.log(this.switchContent);
    }
}
