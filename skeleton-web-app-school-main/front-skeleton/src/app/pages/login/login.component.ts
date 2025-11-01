import { Component, OnInit } from '@angular/core';
import { AuthService, LoginResponse } from 'auth-service.service';
import { Router } from '@angular/router';


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

  constructor(private authService: AuthService
    , private router: Router
  ) {}

  onLogin() {
    if (this.isFormValid()) {
      this.authService.login(this.user.email, this.user.password).subscribe(
        (response: LoginResponse | null) => {
          if (response) {
            if (response.userType === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              // Tous les utilisateurs peuvent se connecter et accéder à la home
              this.router.navigate(['/home']);
            }
          } else {
            this.loginFailed = true;
          }
        },
        (error) => {
          console.error('Erreur lors de la connexion:', error);
          this.loginFailed = true;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

  isFormValid(): boolean {
    return true; 
  }

  
}
