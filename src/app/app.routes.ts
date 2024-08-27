import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StorageComponent } from './components/storage/storage.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { TodoLoginComponent } from './components/todo-app/todo-login/todo-login.component';
import { TodoRegisterComponent } from './components/todo-app/todo-register/todo-register.component';
import { ProductsMod3Task2Component } from './components/products-mod3-task2/products-mod3-task2.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full'
    },
    {
        path: 'storage',
        component: StorageComponent
    },
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'calculator',
        component: CalculatorComponent
    },
    {
        path: 'todo',
        component: TodoAppComponent,
    },
    {
        path: 'todo-login',
        component: TodoLoginComponent,
    },
    {
        path: 'register',
        component: TodoRegisterComponent,
    },
    {
        path: 'products',
        component: ProductsMod3Task2Component,
    },
];
