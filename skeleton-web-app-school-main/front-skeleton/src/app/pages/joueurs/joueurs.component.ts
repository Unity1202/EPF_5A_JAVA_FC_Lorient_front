import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

interface Joueur {
  id: number;
  nom: string;
  prenom: string;
  poste: string;
  numero: number;
  photo: string;
  flag?: string;
  nationalityId?: number;
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

interface Country {
  id: number;
  name: string;
  flag: string;
}

interface WikipediaSummary {
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
  };
}

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.scss']
})
export class JoueursComponent implements OnInit {
  joueur: Joueur | null = null;
  bio: string = '';
  loading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.loadJoueur(id);
    } else {
      this.errorMessage = 'Identifiant du joueur invalide';
      this.loading = false;
    }
  }

  private loadJoueur(id: number): void {
    forkJoin({
      player: this.http.get<ApiPlayer>(`http://localhost:8080/players/${id}`),
      countries: this.http.get<Country[]>('http://localhost:8080/countries')
    }).subscribe({
      next: ({ player, countries }) => {
        const country = countries.find(c => c.id === player.nationality);
        
        this.joueur = {
          id: player.id,
          prenom: player.firstName,
          nom: player.lastName,
          poste: this.formatPosition(player.position),
          numero: player.shirtNumber,
          photo: player.crest,
          flag: country ? country.flag : '',
          nationalityId: player.nationality
        };

        // Charger la bio Wikipedia
        this.loadWikipediaBio(player.firstName, player.lastName);
      },
      error: (err) => {
        console.error('Erreur lors du chargement du joueur:', err);
        this.errorMessage = 'Impossible de charger les informations du joueur';
        this.loading = false;
      }
    });
  }

  private loadWikipediaBio(prenom: string, nom: string): void {
    const wikiName = `${prenom}_${nom}`.replace(/\s+/g, '_');
    const wikiUrl = `https://fr.wikipedia.org/api/rest_v1/page/summary/${wikiName}`;

    this.http.get<WikipediaSummary>(wikiUrl).subscribe({
      next: (data) => {
        this.bio = data.extract || 'Aucune biographie disponible pour ce joueur.';
        this.loading = false;
      },
      error: (err) => {
        console.warn('Biographie Wikipedia non trouvée:', err);
        this.bio = 'Biographie non disponible.';
        this.loading = false;
      }
    });
  }

  private formatPosition(position: string): string {
    if (!position) return '';

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