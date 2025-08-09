import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-saludo',
  imports: [CommonModule],
  templateUrl: './test-saludo.component.html',
  styleUrls: ['./test-saludo.component.css']
})
export class TestSaludoComponent implements OnInit {
  imagenes: string[] = [];

  ngOnInit(): void {
      const imagenUrl = 'images/Test.gif';
      this.imagenes = Array(50).fill(imagenUrl);
  }

}
