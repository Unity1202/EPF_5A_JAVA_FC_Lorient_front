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
  gardiens: Joueur[] = [];
  defenseurs: Joueur[] = [];
  milieux: Joueur[] = [];
  attaquants: Joueur[] = [];

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

        // Séparer les joueurs par poste
        this.gardiens = this.joueurs.filter(j => j.poste === 'Gardien');
        this.defenseurs = this.joueurs.filter(j => j.poste === 'Défenseur');
        this.milieux = this.joueurs.filter(j => j.poste === 'Milieu');
        this.attaquants = this.joueurs.filter(j => j.poste === 'Attaquant');
      },
      error: () => {
        this.joueurs = [];
        this.gardiens = [];
        this.defenseurs = [];
        this.milieux = [];
        this.attaquants = [];
      }
    });
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