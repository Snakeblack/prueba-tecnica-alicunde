import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordStrengthValidator } from 'src/app/helpers/password-strength.validators';
@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  public submitted = false;
  public errorMessages: string[] = [];
  public errorForm = false;

  @Input() titleForm!: string;
  @Input() descriptionForm!: string;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Creación del formulario
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(22),
        PasswordStrengthValidator,
      ]),
    });

    // Suscripción a los cambios del formulario
    this.loginForm.valueChanges.subscribe(() => {
      if (this.submitted) {
        this.actualizarErrores();
      }
    });
  }

  // Método para actualizar los errores del formulario
  actualizarErrores() {
    let errores = new Set<string>();
    const campoEmail = this.loginForm.get('email');
    const campoPassword = this.loginForm.get('password');

    // Si el formulario no es válido, se marca el formulario como con errores
    if (campoEmail?.errors || campoPassword?.errors) {
      this.errorForm = true;
    } else {
      this.errorForm = false;
    }

    // Si el campo de email tiene errores, se añaden al conjunto de errores
    if (campoEmail?.errors) {
      if (campoEmail.getError('required')) {
        errores.add('Tienes que introducir un email');
      }
      if (campoEmail.getError('email') || campoEmail.getError('pattern')) {
        errores.add('El email no es valido');
      }
    }

    // Si el campo de contraseña tiene errores, se añaden al conjunto de errores
    if (campoPassword?.errors) {
      if (campoPassword.getError('required')) {
        errores.add('Tienes que introducir una contraseña');
      }
      if (campoPassword.getError('minlength')) {
        errores.add('La contraseña debe tener al menos 6 caracteres');
      }
      if (campoPassword.getError('maxlength')) {
        errores.add('La contraseña debe tener menos de 22 caracteres');
      }
      if (campoPassword.getError('passwordStrength')) {
        errores.add(campoPassword.getError('passwordStrength'));
      }
    }

    this.errorMessages = Array.from(errores);
  }

  // Método para enviar el formulario
  onSubmit() {
    // Se marca el formulario como enviado
    this.submitted = true;

    // Si el formulario no es válido, se actualizan los errores
    // Si el formuario es válido, se envía al servidor.
    // Esta vez guardamos un token aleatorio en el sessionStorage y redireccionamos a la página "success"
    if (this.loginForm.invalid) {
      this.actualizarErrores();
    } else {
      const token = Math.random().toString(36).substring(2);
      this.errorMessages = [];
      sessionStorage.setItem('token', token);
      this.router.navigate(['/success']);
    }
  }
}
