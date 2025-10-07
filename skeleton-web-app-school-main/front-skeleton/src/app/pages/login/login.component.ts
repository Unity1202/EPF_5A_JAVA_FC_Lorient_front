import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit(): void {
    // Initialisation ou vérification de l'état de connexion ici
  }

  
  onSubmit(): void {
    if (this.username && this.password) {
      console.log('Tentative de connexion avec :', this.username, this.password);
      
    
      alert(`Connexion simulée pour l'utilisateur: ${this.username}`);
      

      this.username = '';
      this.password = '';
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }


  isFormValid(): boolean {
    return !!(this.username.trim() && this.password.trim());
  }
}
