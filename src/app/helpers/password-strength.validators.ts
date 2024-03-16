import { AbstractControl, ValidationErrors } from '@angular/forms';

/**
 * Valida que la contraseña sea fuerte.
 * @parametro control - Variable de tipo `AbstractControl` que representa el control de formulario.
 * @retorna el objeto `ValidationErrors` si la contraseña no cumple los criterios, o `null` si la contraseña es fuerte.
 */
export const PasswordStrengthValidator = function (
  control: AbstractControl
): ValidationErrors | null {
  let value: string = control.value || '';

  // Si no recibe una contraseña, retorna `null`
  if (!value) {
    return null;
  }

  // La contraseña debe contener al menos 1 letra mayúscula
  const upperCaseCharacters = /[A-Z]+/g;
  if (upperCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `La contraseña debe contener caracteres en mayúscula.`,
    };
  }

  // La contraseña debe contener al menos 1 letra minúscula
  const lowerCaseCharacters = /[a-z]+/g;
  if (lowerCaseCharacters.test(value) === false) {
    return {
      passwordStrength: `La contraseña debe contener caracteres en minúscula.`,
    };
  }

  // La contraseña debe contener al menos 1 número
  const numberCharacters = /[0-9]+/g;
  if (numberCharacters.test(value) === false) {
    return {
      passwordStrength: `La contraseña debe contener caracteres numéricos.`,
    };
  }

  // La contraseña debe contener al menos 1 caracter especial
  const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (specialCharacters.test(value) === false) {
    return {
      passwordStrength: `La contraseña debe contener caracteres especiales.`,
    };
  }

  return null;
};
