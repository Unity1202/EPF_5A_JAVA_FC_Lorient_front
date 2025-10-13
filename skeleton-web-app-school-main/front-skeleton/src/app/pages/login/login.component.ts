import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth-service.service';


export interface User{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = { id: '', firstName: '', lastName: '', email: '', password: '' };
  loginFailed: boolean = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    if (this.isFormValid()) {
      this.authService.login(this.user.email, this.user.password).subscribe(
        (success) => {
          if (success) {
            console.log('Connexion réussie');
          } else {
            this.loginFailed = true;
            console.log('Échec de la connexion');
          }
        },
        (error) => {
          console.error('Erreur lors de la connexion', error);
          this.loginFailed = true;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  isFormValid(): boolean {
    return true; // Toujours valide pour l'instant
  }

  
}
