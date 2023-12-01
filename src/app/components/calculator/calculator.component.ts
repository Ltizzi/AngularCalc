import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  newNumber: string = '0';
  preNumb: string = '';
  solution: string = '';
  alreadySolution: boolean = false;
  lastOperationEqual: boolean = false;
  firstTime: boolean = true;
  isUsingParentesis: boolean = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    let pressedKey = event.key;
    console.log(pressedKey);
    if (pressedKey.toString() == 'Enter') {
      this.calculate();
    }
    if (/^[0-9.+\-*/]$/.test(pressedKey)) {
      if (/^[+\-*/]$/.test(pressedKey)) {
        if (this.alreadySolution) {
          this.newNumber = this.solution;
          this.alreadySolution = false;
        }
        pressedKey = ' ' + pressedKey + ' ';
      }
      if (this.firstTime) {
        this.firstTime = false;
        this.newNumber = pressedKey;
      } else this.newNumber += pressedKey;
    } else event.preventDefault();
  }

  numberClicked(num: string) {
    if (this.firstTime) {
      this.firstTime = false;
      this.newNumber = num;
    } else this.newNumber += num;
  }

  useFunction(funct: string) {
    this.preNumb = this.newNumber;
    this.newNumber += funct;
    if (this.alreadySolution == true) {
      this.newNumber = this.solution;
      this.alreadySolution = false;
    }
    if (!this.firstTime) {
      if (funct.trim() == '%') {
        this.solution = eval(this.preNumb + '/' + '100').toString();
      } else this.solution = eval(this.newNumber).toString().substring(0, 15);
    }
  }

  calculate() {
    this.lastOperationEqual = true;
    if (this.newNumber != '0') {
      this.solution = eval(this.newNumber).toString().substring(0, 14);
      this.alreadySolution = true;
    }
  }

  clearDisplay() {
    this.newNumber = '0';
    this.solution = '';
    this.firstTime = true;
    this.preNumb = '';
    this.alreadySolution = false;
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
      this.firstTime = true;
    }
  }
}
