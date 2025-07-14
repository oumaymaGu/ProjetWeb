import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = '';
  notificationCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    
    const user = localStorage.getItem('username'); 
    this.username = user ? user : 'Utilisateur';

    
    this.notificationCount = 0; 
  }

  onNotificationsClick() {
    console.log('Notifications clicked');
    // Rediriger ou ouvrir modal
  }

  logout() {
    localStorage.clear(); 
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
