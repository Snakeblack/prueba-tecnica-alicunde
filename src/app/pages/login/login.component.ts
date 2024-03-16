import { Component } from '@angular/core';
import { FormLoginComponent } from 'src/app/components/form-login/form-login.component';
import { LogoComponent } from '@shared/components/logo/logo.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent, LogoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  // Título del formulario
  titleForm = 'Iniciar sesión';
  // Descripción del formulario
  descriptionForm = 'Introduce tus credenciales para iniciar sesión';
  // Texto del panel de información
  infoPanelText =
    'Todas las solicitudes realizadas a la intranet de Alicunde Systems son almacenadas junto a su IP. Está prohibido el uso de scripts por fuerza bruta o la suplantación de identidad.';
}
