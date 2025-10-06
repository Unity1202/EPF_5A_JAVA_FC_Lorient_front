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
    { titre: 'Préparation physique : les secrets', resume: 'Comment les joueurs restent au top...', image: 'assets/articles/preparation-physique.jpg' },
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

  // DONNÉES DU CLASSEMENT
  // Note: 'pos' est la clé pour la position, utilisée pour le tri et le filtrage.
  classementLigue1 = [
    { pos: 1, club: 'Paris Saint-Germain', pts: 16, j: 7, g: 5, n: 1, p: 1, diff: '+8', logo: 'https://upload.wikimedia.org/wikipedia/fr/4/44/Logo_du_Paris_Saint-Germain.svg' },
    { pos: 2, club: 'Olympique de Marseille', pts: 15, j: 7, g: 5, n: 0, p: 2, diff: '+10', logo: 'https://upload.wikimedia.org/wikipedia/fr/7/75/Logo_Olympique_Marseille_2017.svg' },
    { pos: 3, club: 'RC Strasbourg Alsace', pts: 15, j: 7, g: 5, n: 0, p: 2, diff: '+7', logo: 'https://upload.wikimedia.org/wikipedia/fr/b/b3/Logo_RC_Strasbourg_2020.svg' },
    { pos: 4, club: 'Olympique Lyonnais', pts: 15, j: 7, g: 5, n: 0, p: 2, diff: '+4', logo: 'https://upload.wikimedia.org/wikipedia/fr/4/4e/Logo_Olympique_Lyonnais_2022.svg' },
    { pos: 5, club: 'AS Monaco', pts: 13, j: 7, g: 4, n: 1, p: 2, diff: '+4', logo: 'https://upload.wikimedia.org/wikipedia/fr/d/da/Logo_AS_Monaco_2013.svg' },
    { pos: 6, club: 'RC Lens', pts: 13, j: 7, g: 4, n: 1, p: 2, diff: '+4', logo: 'https://upload.wikimedia.org/wikipedia/fr/4/4b/Logo_RC_Lens_2020.svg' },
    { pos: 7, club: 'LOSC Lille', pts: 11, j: 7, g: 3, n: 2, p: 2, diff: '+4', logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ed/Logo_LOSC_Lille_2018.svg' },
    { pos: 8, club: 'Paris FC', pts: 10, j: 7, g: 3, n: 1, p: 3, diff: '-1', logo: 'https://upload.wikimedia.org/wikipedia/fr/f/fd/Logo_Paris_FC.svg' },
    { pos: 9, club: 'Toulouse FC', pts: 10, j: 7, g: 3, n: 1, p: 3, diff: '-1', logo: 'https://upload.wikimedia.org/wikipedia/fr/5/5e/Logo_Toulouse_FC_2018.svg' },
    { pos: 10, club: 'Stade Rennais FC', pts: 10, j: 7, g: 2, n: 4, p: 1, diff: '-1', logo: 'https://upload.wikimedia.org/wikipedia/fr/e/ec/Logo_Stade_Rennais_FC_2020.svg' },
    { pos: 11, club: 'Stade Brestois 29', pts: 8, j: 7, g: 2, n: 2, p: 3, diff: '0', logo: 'https://upload.wikimedia.org/wikipedia/fr/4/42/Logo_Stade_Brestois_29.svg' },
    { pos: 12, club: 'OGC Nice', pts: 8, j: 7, g: 2, n: 2, p: 3, diff: '-3', logo: 'https://upload.wikimedia.org/wikipedia/fr/5/52/Logo_OGC_Nice_2013.svg' },
    { pos: 13, club: 'FC Lorient', pts: 7, j: 7, g: 2, n: 1, p: 4, diff: '-7', logo: 'https://upload.wikimedia.org/wikipedia/fr/2/29/Logo_FC_Lorient.svg', isHome: true },
    { pos: 14, club: 'Le Havre AC', pts: 6, j: 7, g: 1, n: 3, p: 3, diff: '-2', logo: 'https://upload.wikimedia.org/wikipedia/fr/5/56/Logo_Le_Havre_AC_-_2022.svg' },
    { pos: 15, club: 'FC Nantes', pts: 6, j: 7, g: 1, n: 3, p: 3, diff: '-2', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Logo_FC_Nantes_2019.svg' },
    { pos: 16, club: 'AJ Auxerre', pts: 6, j: 7, g: 2, n: 0, p: 5, diff: '-5', logo: 'https://upload.wikimedia.org/wikipedia/fr/c/cd/Logo_AJ_Auxerre_2023.svg' },
    { pos: 17, club: 'Angers SCO', pts: 5, j: 7, g: 1, n: 2, p: 4, diff: '-8', logo: 'https://upload.wikimedia.org/wikipedia/fr/d/d3/Logo_Angers_SCO_-_2021.svg' },
    { pos: 18, club: 'FC Metz', pts: 2, j: 7, g: 0, n: 2, p: 5, diff: '-11', logo: 'https://upload.wikimedia.org/wikipedia/fr/a/a2/Logo_FC_Metz_2022.svg' },
  ];


  get getFocusedClassement() {
    const lorientIndex = this.classementLigue1.findIndex(club => club.club === 'FC Lorient');
    const startIndex = Math.max(0, lorientIndex - 2); 
  
    const endIndex = Math.min(this.classementLigue1.length, lorientIndex + 3);

    return this.classementLigue1.slice(startIndex, endIndex);
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