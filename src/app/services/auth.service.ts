import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Logica para verificar si el usuario esta logeado
   * Retorna true si el usuario esta autenticado
   * Verifica si existe un token en el sessionStorage
   * @returns boolean
   */
  inLoggedIn(): boolean {
    return !!sessionStorage.getItem('token');
  }
}
