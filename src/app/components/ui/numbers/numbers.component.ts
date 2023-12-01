import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent {
  @Output() numberPressed = new EventEmitter<string>();

  del1al9: Array<string> = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];

  sendNumberToParent(numero: string) {
    this.numberPressed.emit(numero);
  }
}
