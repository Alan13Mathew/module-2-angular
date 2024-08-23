import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,FormGroup,  Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TodoService } from '../../../services/todo.service';
import { User } from '../../../interfaces/user';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-login',
  standalone: true,
  imports: [MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './todo-login.component.html',
  styleUrl: './todo-login.component.css'
})
export class TodoLoginComponent {
  
  // loginForm = new FormGroup({
  //   userName: new FormControl('')
  // });

  loginForm:FormGroup;

  constructor(private fb: FormBuilder,
    private todoService: TodoService,
    private snackbar: MatSnackBar,
    private route: Router)
    {
   this.loginForm = fb.group({
    email: ['', [Validators.required]],
    password: ['',[Validators.required]]
   });
  }
 
  authUser(){
    this.todoService.getTodoUsers().subscribe((response: User[])=>{
      const user = response.find(each=> each.email === this.loginForm.value.email && each.password === this.loginForm.value.password);
      if(user){
        this.snackbar.open('Login Successful','Close',{
              duration: 2500,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            this.route.navigate(['/todo'])
      }
      else{
        this.snackbar.open('Invalid username or password','Close',{
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        this.loginForm.reset()
      }
    });
    
  }
   
}
