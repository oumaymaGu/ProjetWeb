import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Reclamation {
  id: number;
  sujet: string;
  description: string;
  date_creation?: string;
  statut: string;
  user_id: number;
  reponse?: string;
  client_email?: string;
}

@Component({
  selector: 'app-list-admin-reclamtion',
  templateUrl: './list-admin-reclamtion.component.html',
  styleUrls: ['./list-admin-reclamtion.component.css']
})
export class ListAdminReclamtionComponent implements OnInit {
  reclamations: Reclamation[] = [];
  editId: number | null = null;
  reponse = '';

  apiUrl = 'http://localhost:5000/reclamations';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadReclamations();
  }

  loadReclamations() {
    this.http.get<Reclamation[]>(this.apiUrl).subscribe(data => {
      this.reclamations = data;
    });
  }

  deleteReclamation(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette réclamation sera définitivement supprimée.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#c8102e',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${this.apiUrl}/${id}`).subscribe({
          next: () => {
            this.loadReclamations();
            Swal.fire(
              'Supprimée !',
              'La réclamation a été supprimée avec succès.',
              'success'
            );
          },
          error: () => {
            Swal.fire(
              'Erreur',
              'La suppression a échoué. Veuillez réessayer.',
              'error'
            );
          }
        });
      }
    });
  }

  startEdit(reclamation: Reclamation) {
    this.editId = reclamation.id;
    this.reponse = reclamation.reponse || '';
  }

  cancelEdit() {
    this.editId = null;
    this.reponse = '';
  }

updateReclamation(reclamation: Reclamation) {
  const updated = {
    ...reclamation,
    statut: 'traité',
    reponse: this.reponse
  };

  // Vider tout de suite le champ réponse (pour que ça disparaisse dans le textarea)
  this.reponse = '';
  this.editId = null;

  this.http.put(`${this.apiUrl}/${reclamation.id}`, updated).subscribe(() => {
    this.loadReclamations();

    Swal.fire({
      icon: 'success',
      title: 'Réponse envoyée',
      text: 'La réclamation a été traitée avec succès.'
    });
  });
}

}
