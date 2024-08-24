import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-register',
  standalone: true,
  imports: [MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      ReactiveFormsModule,
      MatSnackBarModule
    ],
  templateUrl: './todo-register.component.html',
  styleUrl: './todo-register.component.css'
})
export class TodoRegisterComponent implements OnInit{
 registrationForm!: FormGroup;

  constructor(
    private route: Router,
    private userService: TodoService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.registrationForm = this.fb.group({
        fname: ['',[Validators.required]],
        lname: ['',[Validators.required]],
        email: ['',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        confirmPassword: ['',[Validators.required]]
      },
      {
        validators: this.passwordMatchValidator()
      }
    );
  }
  
  passwordMatchValidator(): ValidatorFn{
    return (control: AbstractControl):ValidationErrors | null=>{
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      if(password && confirmPassword && password.value !== confirmPassword.value) {
        control.get('confirmPassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
     }
      return null;
    }
 }

 registerUser(){
    const newUser = this.registrationForm.value;
    this.userService.getTodoUsers().subscribe(allUsers => {
      const userExists = allUsers.some(user=> user.email === newUser.email);
      if(userExists){
        this.snackbar.open('User Already Exists!','close',{
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
        this.registrationForm.reset();
      }
      else{
        this.userService.addTodoUsers(newUser).subscribe(()=>{
          this.snackbar.open('Registration successfull!','close',{
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.route.navigate(['/todo-login']);
        });
      }
    });
  }

}