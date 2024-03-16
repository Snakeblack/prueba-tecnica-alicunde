import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FormLoginComponent } from './form-login.component';

describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
    }).compileComponents();
  });

  // Creación del componente y el formulario
  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  // Prueba de la creación del componente
  it('debería crearse', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario con valores vacíos', () => {
    expect(component.loginForm.get('email')?.value).toEqual('');
    expect(component.loginForm.get('password')?.value).toEqual('');
  });

  it('debería marcar el formulario como inválido cuando está vacío', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('debería marcar el formulario como inválido cuando el correo electrónico es inválido', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('correo_invalido');
    expect(emailControl?.valid).toBeFalsy();
  });

  it('debería marcar el formulario como inválido cuando la contraseña tiene menos de 6 caracteres', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('corta');
    expect(passwordControl?.valid).toBeFalsy();
  });

  it('debería marcar el formulario como inválido cuando la contraseña tiene más de 22 caracteres', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('estacontraseñaesdemasiadolargaparaesteformulario');
    expect(passwordControl?.valid).toBeFalsy();
  });

  it('debería marcar el formulario como válido cuando el correo electrónico y la contraseña son válidos', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');
    emailControl?.setValue('valido@ejemplo.com');
    passwordControl?.setValue('Prueba$777');
    expect(component.loginForm.valid).toBeTruthy();
  });
});
