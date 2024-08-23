import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from '../../../interfaces/user';

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
    private fb: FormBuilder,
    // private userService: User,
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
        return {mismatch:true};
     }
    return null;
  }
 }

 registerUser(){

 }

}