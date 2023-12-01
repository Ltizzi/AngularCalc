import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  newNumber: string = '0';
  firstTime: boolean = true;
  isUsingParentesis: boolean = false;

  numberClicked(num: string) {
    if (this.firstTime) {
      this.firstTime = false;
      this.newNumber = num;
    } else this.newNumber += num;
  }

  useFunction(funct: string) {
    if (!this.firstTime) {
      this.newNumber += funct;
    }
  }

  calculate() {}

  clearDisplay() {
    this.newNumber = '0';
    this.firstTime = true;
  }

  groupNumber() {
    if (!this.isUsingParentesis) {
      if (this.firstTime) {
        this.firstTime = false;
        this.newNumber = '';
      }
      this.isUsingParentesis = true;
      this.newNumber += '( ';
    } else {
      this.newNumber += ' )';
      this.isUsingParentesis = false;
    }
  }

  deleteLast() {
    this.newNumber = this.newNumber.slice(0, -1);
    if (this.newNumber.length == 0) {
      this.newNumber = '0';
    }
  }
}
