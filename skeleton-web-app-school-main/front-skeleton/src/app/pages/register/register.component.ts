import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Pour naviguer après l'inscription

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // Variables du formulaire d'inscription
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private router: Router) { } // Injecter le Router

  ngOnInit(): void {
  }

  /**
   * Vérifie si tous les champs requis sont remplis et valides.
   */
  isFormValid(): boolean {
    // Vérification simple que tous les champs sont non vides après avoir retiré les espaces blancs
    return !!(
      this.firstName.trim() && 
      this.lastName.trim() && 
      this.email.trim() && 
      this.password.trim()
    );
  }

  /**
   * Gère la soumission du formulaire d'inscription.
   */
  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Tentative d\'inscription avec :', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });
      
      // LOGIQUE D'INSCRIPTION RÉELLE (appel à l'API)

      // Simulation de succès
      alert(`Inscription de ${this.firstName} réussie ! Redirection vers la connexion.`);
      
      // Réinitialiser les champs et rediriger l'utilisateur vers la page de connexion après l'inscription
      this.router.navigate(['/login']);
      
    } else {
      alert("Veuillez remplir correctement tous les champs.");
    }
  }
}
