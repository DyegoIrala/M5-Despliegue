import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSaludoComponent } from "./test-saludo/test-saludo.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestSaludoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'M5-Despliegue';
}
