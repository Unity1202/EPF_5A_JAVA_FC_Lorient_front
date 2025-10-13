import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Match {
  id: number; // Correspond à SERIAL PRIMARY KEY
  utcDate: string; // TIMESTAMP -> string (format ISO 8601)
  status: string; // TEXT -> string
  score_home: number | null; // INT -> number ou null si non défini
  score_away: number | null; // INT -> number ou null si non défini
  homeTeamId: number; // INT not null -> number
  awayTeamId: number; // INT not null -> number

  domicile?: string;
  exterieur?: string;
  domicileLogo?: string;
  exterieurLogo?: string;
  lieu?: string;
}

export interface Team {
  id: number; // Correspond à SERIAL PRIMARY KEY
  name: string; // TEXT -> string
  shortName: string; // TEXT -> string
  crest: string; // TEXT -> string
  rank: number; // INT -> number
  points: number; // INT -> number
  played: number; // INT -> number
  won: number; // INT -> number
  drawn: number; // INT -> number
  lost: number; // INT -> number
  diff: number; // INT -> number

  billeterieUrl?: string; // TEXT -> string
}

@Component({
  selector: 'app-nextmatch',
  templateUrl: './nextmatch.component.html',
  styleUrls: ['./nextmatch.component.scss']
})
export class NextmatchComponent implements OnInit {

  prochainMatch: Match | null = null;
  matchsAVenir: Match[] = [];
  matchsPrecedents: Match[] = [];
  teams: Team[] = [];
  tousLesMatchs: Match[] =[]

  constructor(private http: HttpClient) {}
  


  ngOnInit(): void {
    this.initialiserMatchs();
    
  }

  fetchMatchs(): void {
    this.http.get<Match[]>('http://localhost:8080/matchs').subscribe(data => {
      console.log('Matchs reçus:', data);
      this.matchsAVenir = data;
      this.enrichirMatchs();
    });
  }

  fetchTeams(): void {
    this.http.get<Team[]>('http://localhost:8080/teams').subscribe(data => {
      console.log('Équipes reçues:', data);
      this.teams = data;
      this.enrichirMatchs();
    });
  }

  enrichirMatchs(): void {
    if (this.tousLesMatchs.length === 0 || this.teams.length === 0) return;
  
    this.tousLesMatchs = this.tousLesMatchs.map(match => {
      const homeTeam = this.teams.find(t => t.id === match.homeTeamId);
      const awayTeam = this.teams.find(t => t.id === match.awayTeamId);
      return {
        ...match,
        domicile: homeTeam?.shortName || 'Équipe A',
        exterieur: awayTeam?.shortName || 'Équipe B',
        domicileLogo: homeTeam?.crest || '',
        exterieurLogo: awayTeam?.crest || '',
        lieu: homeTeam?.name || '',
        billeterieUrl: homeTeam?.billeterieUrl || ''
      };
    });
  }
  

  initialiserMatchs(): void {
    this.http.get<Team[]>('http://localhost:8080/teams').subscribe(teams => {
      this.teams = teams;
  
      this.http.get<Match[]>('http://localhost:8080/matchs').subscribe(matchs => {
        this.tousLesMatchs = matchs;
        this.enrichirMatchs();
        this.chargerMatchs();
      });
    });
  }
  

  chargerMatchs() {
    const maintenant = new Date();

    // Séparer les matchs futurs et passés
    const futurs = this.tousLesMatchs
      .filter(m => new Date(m.utcDate as string) >= maintenant) // Conversion de m.utcDate en Date
      .sort((a, b) => new Date(a.utcDate as string).getTime() - new Date(b.utcDate as string).getTime()); // Conversion de a.utcDate et b.utcDate en Date

    const passes = this.tousLesMatchs
      .filter(m => new Date(m.utcDate as string) < maintenant) // Conversion de m.utcDate en Date
      .sort((a, b) => new Date(b.utcDate as string).getTime() - new Date(a.utcDate as string).getTime());


    this.prochainMatch = futurs.length > 0 ? futurs[0] : null;

    this.matchsAVenir = futurs.slice(1);
    

    this.matchsPrecedents = passes;
  }

  ouvrirBilleterie() {
    window.open('https://billetterie.fclorient.bzh/fr/');
  }

  retour() {
    // Navigation vers la page d'accueil ou précédente
    window.history.back();
  }
}