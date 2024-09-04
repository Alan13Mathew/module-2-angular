import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: [
        '', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$'),
          this.dynamicPasswordValidator({
            minLength: 8,
            uppercase: true,
            lowercase: true,
            number: true,
            specialCharacter: true
          })
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    },
    { validator: this.passwordMatchValidator});
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
   }
dynamicPasswordValidator(passwordCriteria: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value || '';
      let valid = true;
      let error = {};
  
      if (passwordCriteria.minLength && value.length < passwordCriteria.minLength) {
        valid = false;
        error = { ...error, minLength: `Password must be at least ${passwordCriteria.minLength} characters long.` };
      }
  
      if (passwordCriteria.uppercase && !/[A-Z]/.test(value)) {
        valid = false;
        error = { ...error, uppercase: 'Password must contain at least one uppercase letter.' };
      }
  
      if (passwordCriteria.lowercase && !/[a-z]/.test(value)) {
        valid = false;
        error = { ...error, lowercase: 'Password must contain at least one lowercase letter.' };
      }
  
      if (passwordCriteria.number && !/\d/.test(value)) {
        valid = false;
        error = { ...error, number: 'Password must contain at least one number.' };
      }
  
      if (passwordCriteria.specialCharacter && !/[\W_]/.test(value)) {
         valid = false;
          error = { ...error, specialCharacter: 'Password must contain at least one special character.' };
         }
  
  return valid ? null : error; }
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted!', this.userForm.value);
    }
  }
}
 
