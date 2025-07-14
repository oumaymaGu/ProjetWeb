import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';

interface Reclamation {
  id?: number;
  sujet: string;
  description: string;
  date_creation?: string;
  statut?: string;
  user_id: number;
}

@Component({
  selector: 'app-add-user-reclamation',
  templateUrl: './add-user-reclamation.component.html',
  styleUrls: ['./add-user-reclamation.component.css']
})
export class AddUserReclamationComponent implements OnInit {
  reclamationForm!: FormGroup;
  userId = 0;
  showSuccess = false;

  apiUrl = 'http://localhost:5000/reclamations';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      this.userId = +storedUserId;
    }

    this.reclamationForm = this.fb.group({
      sujet: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  addReclamation() {
    if (this.reclamationForm.invalid) return;

    const newReclamation = {
      sujet: this.reclamationForm.value.sujet,
      description: this.reclamationForm.value.description,
      user_id: this.userId
    };

    this.http.post(this.apiUrl, newReclamation).subscribe({
      next: () => {
        this.showSuccess = true;
        setTimeout(() => {
          this.router.navigate(['/list-user-reclamation']);
        }, 2000);
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout de la réclamation', err);
      }
    });
  }
}
