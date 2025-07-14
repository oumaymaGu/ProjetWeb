import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMsg = '';
  successMsg = '';

  constructor(private http: HttpClient, private router: Router) {}

  goToRegister() {
  this.router.navigate(['/register']);
}

  login() {
    this.http.post<any>('http://localhost:5000/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('role', res.role);
        localStorage.setItem('user_id', res.user_id);
        localStorage.setItem('username', res.username || 'Utilisateur');

        this.errorMsg = '';
        this.successMsg = 'Connexion réussie. Redirection...';
        setTimeout(() => {
          if (res.role === 'admin') {
            this.router.navigate(['/list-admin-reclamation']);
          } else {
            this.router.navigate(['/add-user-reclamation']);
          }
        }, 1500); // 1,5 seconde avant redirection
      },
      error: (err) => {
        this.errorMsg = err.error.msg || 'Erreur de connexion';
        this.successMsg = '';
      }
    });
  }
}