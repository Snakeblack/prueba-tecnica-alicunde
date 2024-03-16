import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // si accedes a la ruta y no has hecho login, te redirige a la página de login
  if (!authService.inLoggedIn()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
