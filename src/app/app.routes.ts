import { Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { StorageComponent } from './components/storage/storage.component';

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
];
