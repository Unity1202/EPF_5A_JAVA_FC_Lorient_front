import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

interface Joueur {
  nom: string;
  poste: string;
  numero: number;
  photo: string;
}

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.scss']
})
export class ListeJoueursComponent implements OnInit {
  joueurs: Joueur[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const ids = Array.from({ length: 26 }, (_, i) => i + 1);
    const requests = ids.map((id) =>
      this.http
        .get<any>(`${environment.apiBaseUrl}/players/${id}`)
        .pipe(catchError(() => of(null)))
    );

    forkJoin(requests).subscribe((players) => {
      const validPlayers = players.filter((p): p is any => p !== null);
      this.joueurs = validPlayers.map((p) => ({
        nom: `${p.firstName} ${p.lastName}`,
        poste: this.capitalizeFirst(p.position),
        numero: p.shirtNumber,
        photo: p.crest,
      }));
    });
  }

  private capitalizeFirst(value: string | undefined): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
