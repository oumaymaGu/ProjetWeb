import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Reclamation {
  id?: number;
  sujet: string;
  description: string;
  date_creation?: string;
  statut?: string;
  user_id: number;
  reponse?: string;
}

@Component({
  selector: 'app-list-user-reclamation',
  templateUrl: './list-user-reclamation.component.html',
  styleUrls: ['./list-user-reclamation.component.css']
})
export class ListUserReclamationComponent implements OnInit {
  reclamations: Reclamation[] = [];
  userId = 0; 

  constructor(private http: HttpClient) { }

 ngOnInit(): void {
  const storedUserId = localStorage.getItem('user_id');
  if (storedUserId) {
    this.userId = +storedUserId;
    this.loadReclamations();
  }
}

  loadReclamations() {
    const token = localStorage.getItem('access_token');
    this.http.get<Reclamation[]>(`http://localhost:5000/reclamations?user_id=${this.userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe(data => {
      this.reclamations = data;
    });
  }
}