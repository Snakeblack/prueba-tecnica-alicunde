import { Component } from '@angular/core';
import { LogoComponent } from '@shared/components/logo/logo.component';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css',
})
export class SuccessComponent {
  // dirección del gif de success
  gifPath = 'assets/gif/funny-cats.gif';
  // Firma del autor
  firma = 'Hecho por Manuel Michael Retamozo García';
}
