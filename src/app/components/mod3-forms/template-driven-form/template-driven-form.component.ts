import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule,MatCardModule,CommonModule,MatInputModule,MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  constructor(private snackbar:MatSnackBar){}
  onSubmit(form: any) {
    if (form.valid) {
      this.snackbar.open('Form Submitted!','close',{
        duration:2000,
        verticalPosition:'top',
        horizontalPosition:'center'
      })
      console.log('Form Submitted!', form.value);
    }
  }
}
