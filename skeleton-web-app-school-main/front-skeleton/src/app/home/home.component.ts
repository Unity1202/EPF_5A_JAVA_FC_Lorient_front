import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

export interface Article {
    id: number; // Correspond à SERIAL PRIMARY KEY
    title: string; // TEXT -> string
    content: string; // TEXT -> string
    image: string; // TEXT -> string
    createdAt: string; // TIMESTAMP -> string (format ISO 8601)
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
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  matchsAVenir : Match[] = [];
  articles : Article[] = [];
  teams : Team[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Team[]>('http://localhost:8080/teams').subscribe(teams => {
    this.teams = teams;
    this.http.get<Match[]>('http://localhost:8080/matchs').subscribe(matchs => {
      this.matchsAVenir = matchs;
      this.enrichirMatchs();
    });
  });
    this.fetchArticles();
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
    if (this.matchsAVenir.length === 0 || this.teams.length === 0) return;
  
    this.matchsAVenir = this.matchsAVenir.map(match => {
      const homeTeam = this.teams.find(t => t.id === match.homeTeamId);
      const awayTeam = this.teams.find(t => t.id === match.awayTeamId);
      return {
        ...match,
        domicile: homeTeam?.shortName || 'Équipe A',
        exterieur: awayTeam?.shortName || 'Équipe B',
        domicileLogo: homeTeam?.crest || '',
        exterieurLogo: awayTeam?.crest || '',
        lieu: homeTeam?.name || ''
      };
    });
  }

  fetchArticles(): void {
    this.http.get<Article[]>('http://localhost:8080/articles').subscribe(data => {
      console.log('Articles reçus:', data);
      this.articles = data;
    });
  }


  currentSlide = 0;
  

  getSortedTeams(): Team[] {
    return this.teams
      .slice() // on clone le tableau pour ne pas le modifier directement
      .sort((a, b) => a.rank - b.rank);
  }
  
  // Retourne uniquement les équipes proches du FC Lorient (pour focus)
  getFocusedTeams(): Team[] {
    const lorientIndex = this.teams.findIndex(t => t.name === 'FC Lorient');
    if (lorientIndex === -1) return [];
  
    const startIndex = Math.max(0, lorientIndex - 2);
    const endIndex = Math.min(this.teams.length, lorientIndex + 3);
    return this.getSortedTeams().slice(startIndex, endIndex);
  }

  // Pagination
  currentPage = 1;
  articlesPerPage = 4;

  get totalPages(): number {
    return Math.ceil(this.articles.length / this.articlesPerPage);
  }

  get paginatedArticles() {
    const start = (this.currentPage - 1) * this.articlesPerPage;
    return this.articles.slice(start, start + this.articlesPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  // Carousel
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.articles.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.articles.length) % this.articles.length;
  }


}