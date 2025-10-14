import { Component, OnInit } from '@angular/core';
import { AuthService } from 'auth-service.service';
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
        (role) => {
          if (role === 'user') {
            this.router.navigate(['/home']);
          } else if (role === 'admin') {
            this.router.navigate(['/admin']);
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
