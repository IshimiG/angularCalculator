import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  imports: [],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
})
export class Buttons {
  @Output() keyPressed = new EventEmitter<String>();
  pressKey(key: string) {
    this.keyPressed.emit(key);
  }
}
