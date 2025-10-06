import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentSlide = 0;
  articles = [
    // Exemples d’articles :
    { titre: 'Victoire du FCL face à Rennes', resume: 'Un match spectaculaire à Moustoir...', image: 'assets/articles/lorient-rennes.jpg' },
    { titre: 'Présentation du nouveau maillot', resume: 'Découvrez le maillot 2025...', image: 'assets/articles/maillot2025.jpg' },
    { titre: 'Interview exclusive de l’entraîneur', resume: 'Les ambitions pour la saison...', image: 'assets/articles/faivre.jpg' },
    { titre: 'Analyse tactique du dernier match', resume: 'Décryptage des choix stratégiques...', image: 'assets/articles/analyse-tactique.jpg' },
    { titre: 'Focus sur le jeune talent breton', resume: 'Portrait d’un espoir du club...', image: 'assets/articles/jeune-talent.jpg' },
    { titre: 'Retour sur l’histoire du FCL', resume: 'Les moments clés depuis 1926...', image: 'assets/articles/histoire-fcl.jpg' },
    { titre: 'Les coulisses de l’entraînement', resume: 'Une journée avec les joueurs...', image: 'assets/articles/entrainement.jpg' },
    { titre: 'Le FCL et la communauté locale', resume: 'Engagements et initiatives...', image: 'assets/articles/communaute.jpg' },
    { titre: 'Préparation physique : les secrets', resume: 'Comment les joueurs restent au top...', image: 'assets/articlesan/preparation-physique.jpg' },
    // ...ajoute-en autant que nécessaire
  ];

  matchsAVenir = [
    { date: new Date('2025-10-12'), domicile: 'FC Lorient', exterieur: 'OL', lieu: 'Stade du Moustoir' },
    { date: new Date('2025-10-19'), domicile: 'PSG', exterieur: 'FC Lorient', lieu: 'Parc des Princes' },
    { date: new Date('2025-10-26'), domicile: 'FC Lorient', exterieur: 'OM', lieu: 'Stade du Moustoir' },
    { date: new Date('2025-11-02'), domicile: 'AS Monaco', exterieur: 'FC Lorient', lieu: 'Stade Louis II' },
    { date: new Date('2025-11-09'), domicile: 'FC Lorient', exterieur: 'LOSC', lieu: 'Stade du Moustoir' },
    { date: new Date('2025-11-16'), domicile: 'OGC Nice', exterieur: 'FC Lorient', lieu: 'Allianz Riviera' },
    { date: new Date('2025-11-23'), domicile: 'FC Lorient', exterieur: 'Stade Rennais', lieu: 'Stade du Moustoir' },
    { date: new Date('2025-11-30'), domicile: 'Montpellier HSC', exterieur: 'FC Lorient', lieu: 'Stade de la Mosson' },
    { date: new Date('2025-12-07'), domicile: 'FC Lorient', exterieur: 'Girondins de Bordeaux', lieu: 'Stade du Moustoir' },
    { date: new Date('2025-12-14'), domicile: 'Toulouse FC', exterieur: 'FC Lorient', lieu: 'Stadium de Toulouse' },
  ];

  // Pagination
  currentPage = 1;
  articlesPerPage = 9;

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
