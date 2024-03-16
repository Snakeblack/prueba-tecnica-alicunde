import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {
  // Ruta de la imagen del logo
  logoPath = 'assets/img/alicunde-logo.webp';
}
