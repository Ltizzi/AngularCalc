import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  newNumber: string = '0';
  firstTime: boolean = true;

  numberClicked(num: string) {
    if (this.firstTime) {
      this.firstTime = false;
      this.newNumber = num;
    } else this.newNumber += num;
  }
}
