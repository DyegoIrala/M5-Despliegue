import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestSaludoComponent } from "./test-saludo/test-saludo.component";
import { LikeButtonComponent } from "./like-button/like-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestSaludoComponent, LikeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'M5-Despliegue';
}
