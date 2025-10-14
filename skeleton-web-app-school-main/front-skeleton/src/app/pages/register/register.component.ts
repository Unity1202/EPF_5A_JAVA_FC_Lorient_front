import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Pour naviguer après l'inscription
import { HttpClient } from '@angular/common/http'; // Importer HttpClient


export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  user: User = { id: '', firstName: '', lastName: '', email: '', password: '' }; // Initialiser avec un objet User

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  registerUser(): void {
    if (this.isFormValid()) { 
      const apiUrl = `http://localhost:8080/users`; 
      this.http.post(apiUrl, this.user).subscribe({
        next: (response) => {
          console.log('Utilisateur créé avec succès', response);
          this.router.navigate(['/login']); 
        },
        error: (err) => {
          console.error('Erreur lors de la création de l\'utilisateur', err);
        }
      });
    } else {
      console.error('Le formulaire n\'est pas valide');
    }
  }

  isFormValid(): boolean { // Nouvelle fonction pour valider le formulaire
    return this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '';
  }

  
}