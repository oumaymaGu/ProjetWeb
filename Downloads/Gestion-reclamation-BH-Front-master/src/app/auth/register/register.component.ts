import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  role_id = 2; //user
  errorMsg = '';
  successMsg = '';

  constructor(private http: HttpClient , private router: Router) {}

  goToLogin() {
  this.router.navigate(['']);
}

  register() {
    this.http.post<any>('http://localhost:5000/register', {
      username: this.username,
      email: this.email,
      password: this.password,
      role_id: this.role_id
    }).subscribe({
      next: (res) => {
        this.successMsg = res.msg;
        this.errorMsg = '';
        this.router.navigate(['/']); 
        

      },
      error: (err) => {
        this.errorMsg = err.error.msg || 'Erreur lors de l’inscription';
        this.successMsg = '';
      }
    });
  }
}