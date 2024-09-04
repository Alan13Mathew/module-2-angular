import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
  onSubmit(form: any) {
    if (form.valid) {
      alert('Form Submitted!');
      console.log('Form Submitted!', form.value);
    }
  }
}
