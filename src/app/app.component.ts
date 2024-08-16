import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 num1!:number;
 num2!:number;
 optionSelected!:number;
  sum!: number;
  diff!: number;
  product!: number;
  quotient!: number;
  result!:number;

  constructor(private calculatorService: CalculatorService){}

  performOperation(){
    if(this.optionSelected == 1){
      this.sum = this.calculatorService.addition(this.num1,this.num2);
    }
    else if(this.optionSelected == 2){
      this.diff = this.calculatorService.subtraction(this.num1,this.num2);
    }
    else if(this.optionSelected == 3){
      this.quotient = this.calculatorService.division(this.num1,this.num2);
    }
    else if(this.optionSelected == 4){
      this.product = this.calculatorService.multiply(this.num1,this.num2);
    }
  }  

}
