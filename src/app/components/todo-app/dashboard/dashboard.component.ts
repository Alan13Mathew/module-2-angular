import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../services/todo.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalTasks: number = 0;
  completedTasks: number = 0;
  pendingTasks: number = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadStatistics();
  }

  loadStatistics(): void {
    this.todoService.getTodo().subscribe(todos => {
      this.totalTasks = todos.length;
      this.completedTasks = todos.filter(todo => todo.completed).length;
      this.pendingTasks = this.totalTasks - this.completedTasks;
    });
  }
}
