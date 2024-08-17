import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  num1!:number;
  num2!:number;
  optionSelected:number = 1;
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
