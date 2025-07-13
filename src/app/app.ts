import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buttons } from './buttons/buttons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Buttons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
