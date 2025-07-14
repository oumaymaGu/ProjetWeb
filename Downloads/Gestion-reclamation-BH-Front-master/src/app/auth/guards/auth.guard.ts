import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    const role = localStorage.getItem('role');

    if (token && role === 'admin') {
      // Utilisateur connecté ET admin
      return true;
    } else {
      // Non admin ou pas connecté
      this.router.navigate(['']);
      return false;
    }
  }
}
