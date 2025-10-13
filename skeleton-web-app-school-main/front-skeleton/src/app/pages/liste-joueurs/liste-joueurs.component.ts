import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Joueur {
  nom: string;
  poste: string;
  numero: number;
  photo: string;
}

interface ApiPlayer {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  birthDate: string;
  shirtNumber: number;
  nationality: number;
  crest: string;
}

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.scss']
})
export class ListeJoueursComponent implements OnInit {
  joueurs: Joueur[] = [];
  postes: string[] = ['Tous', 'Gardien', 'Défenseur', 'Milieu', 'Attaquant'];
  selectedPoste: string = 'Tous';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<ApiPlayer[]>("http://localhost:8080/players").subscribe({
      next: (players) => {
        this.joueurs = players.map((p) => ({
          nom: `${p.firstName} ${p.lastName}`.trim(),
          poste: this.formatPosition(p.position),
          numero: p.shirtNumber,
          photo: p.crest
        }));
      },
      error: () => {
        this.joueurs = [];
      }
    });
  }

  get filteredJoueurs(): Joueur[] {
    if (this.selectedPoste === 'Tous') {
      return this.joueurs;
    }
    return this.joueurs.filter(j => j.poste === this.selectedPoste);
  }

  private formatPosition(position: string): string {
    if (!position) {
      return '';
    }
    const lower = position.toLowerCase();
    switch (lower) {
      case 'gardien':
      case 'goalkeeper':
        return 'Gardien';
      case 'défenseur':
      case 'defenseur':
      case 'defender':
        return 'Défenseur';
      case 'milieu':
      case 'midfielder':
        return 'Milieu';
      case 'attaquant':
      case 'forward':
      case 'striker':
        return 'Attaquant';
      default:
        return position;
    }
  }
}