import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }
  
  addition(num1: number, num2: number): number{
    return (num1 + num2);
  }
 
  subtraction(num1: number, num2: number): number{
    return (num1 - num2);
  }
  division(num1: number, num2: number): number{
    return (num1 / num2);
  }
  multiply(num1: number, num2: number): number{
    return (num1 * num2);
  }

}
