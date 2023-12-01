import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css'],
})
export class TopComponent {
  @Output() displayCleared = new EventEmitter<boolean>();
  @Output() paretensisUsed = new EventEmitter<boolean>();
  @Output() percentUsed = new EventEmitter<boolean>();
  @Output() deleteLastUsed = new EventEmitter<boolean>();

  clearDisplay() {
    this.displayCleared.emit(true);
  }

  useParentesis() {
    this.paretensisUsed.emit(true);
  }

  usePercent() {
    this.percentUsed.emit(true);
  }

  deleteLast() {
    this.deleteLastUsed.emit(true);
  }
}
