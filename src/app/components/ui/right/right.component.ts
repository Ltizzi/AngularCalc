import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
})
export class RightComponent {
  @Output() functionUsed = new EventEmitter<string>();
  @Output() equalUsed = new EventEmitter<boolean>();

  useFunction(funct: string) {
    this.functionUsed.emit(funct);
  }

  useCalc() {
    this.equalUsed.emit(true);
  }
}
