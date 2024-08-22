import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { MatCardModule } from '@angular/material/card';
import { TodoItems } from '../../interfaces/todo-items';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [MatCardModule,RouterOutlet,MatCheckboxModule,MatSnackBarModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css'
})
export class TodoAppComponent implements OnInit {

constructor(private route: Router,private snackbar: MatSnackBar , private todoDataService: TodoService){}

 todos!: TodoItems[];
 activeTab: string = 'incomplete';
 addTodoData: TodoItems={
  todoName: '',
  todoDesc: '',
  completed: false
 };
 incompleteTasks!: TodoItems[];
  completedTasks!: TodoItems[];

  switchContent: boolean = false;
  showStatistics: boolean = true;

  
  totalTasks: number = 0;
  completedTasksCount: number = 0;
  pendingTasksCount: number = 0;
 


 ngOnInit(): void {
  this.displayTodo();
  this.loadStatistics();
    }

    showStat(){
      this.showStatistics = !this.showStatistics;
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
        this.loadStatistics();
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

    loadStatistics(): void {
      this.todoDataService.getTodo().subscribe(todos => {
        this.totalTasks = todos.length;
        this.completedTasksCount = todos.filter(todo => todo.completed).length;
        this.pendingTasksCount = this.totalTasks - this.completedTasksCount;
      });
    }

    tabSelect(tab: string) {
      this.activeTab = tab;
    }
}
