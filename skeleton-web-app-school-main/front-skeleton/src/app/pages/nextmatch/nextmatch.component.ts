import { Component, OnInit } from '@angular/core';

interface Match {
  date: Date;
  domicile: string;
  exterieur: string;
  lieu: string;
  scoreDomicile?: number;
  scoreExterieur?: number;
  billeterieUrl?: string;
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

  // Votre tableau de matchs
  tousLesMatchs: Match[] = [
    { 
      date: new Date('2025-10-12'), 
      domicile: 'FC Lorient', 
      exterieur: 'OL', 
      lieu: 'Stade du Moustoir',
      billeterieUrl: 'https://billeterie.example.com/match1'
    },
    { 
      date: new Date('2025-10-19'), 
      domicile: 'PSG', 
      exterieur: 'FC Lorient', 
      lieu: 'Parc des Princes',
      billeterieUrl: 'https://billeterie.example.com/match2'
    },
    { 
      date: new Date('2025-10-26'), 
      domicile: 'FC Lorient', 
      exterieur: 'OM', 
      lieu: 'Stade du Moustoir',
      billeterieUrl: 'https://billeterie.example.com/match3'
    },
    { 
      date: new Date('2025-11-02'), 
      domicile: 'AS Monaco', 
      exterieur: 'FC Lorient', 
      lieu: 'Stade Louis II',
      billeterieUrl: 'https://billeterie.example.com/match4'
    },
    { 
      date: new Date('2025-11-09'), 
      domicile: 'FC Lorient', 
      exterieur: 'LOSC', 
      lieu: 'Stade du Moustoir',
      billeterieUrl: 'https://billeterie.example.com/match5'
    },
    { 
      date: new Date('2025-11-16'), 
      domicile: 'OGC Nice', 
      exterieur: 'FC Lorient', 
      lieu: 'Allianz Riviera',
      billeterieUrl: 'https://billeterie.example.com/match6'
    },
    { 
      date: new Date('2025-11-23'), 
      domicile: 'FC Lorient', 
      exterieur: 'Stade Rennais', 
      lieu: 'Stade du Moustoir',
      billeterieUrl: 'https://billeterie.example.com/match7'
    },
    { 
      date: new Date('2025-11-30'), 
      domicile: 'Montpellier HSC', 
      exterieur: 'FC Lorient', 
      lieu: 'Stade de la Mosson',
      billeterieUrl: 'https://billeterie.example.com/match8'
    },
    { 
      date: new Date('2025-12-07'), 
      domicile: 'FC Lorient', 
      exterieur: 'Girondins de Bordeaux', 
      lieu: 'Stade du Moustoir',
      billeterieUrl: 'https://billeterie.example.com/match9'
    },
    { 
      date: new Date('2025-12-14'), 
      domicile: 'Toulouse FC', 
      exterieur: 'FC Lorient', 
      lieu: 'Stadium de Toulouse',
      billeterieUrl: 'https://billeterie.example.com/match10'
    },
    // Exemples de matchs précédents (ajoutez les vôtres)
    { 
      date: new Date('2025-09-28'), 
      domicile: 'FC Lorient', 
      exterieur: 'RC Lens', 
      lieu: 'Stade du Moustoir',
      scoreDomicile: 2,
      scoreExterieur: 1
    },
    { 
      date: new Date('2025-09-21'), 
      domicile: 'Stade Brestois', 
      exterieur: 'FC Lorient', 
      lieu: 'Stade Francis-Le Blé',
      scoreDomicile: 1,
      scoreExterieur: 3
    },
    { 
      date: new Date('2025-09-14'), 
      domicile: 'FC Lorient', 
      exterieur: 'AS Saint-Étienne', 
      lieu: 'Stade du Moustoir',
      scoreDomicile: 0,
      scoreExterieur: 0
    }
  ];

  ngOnInit() {
    this.chargerMatchs();
  }

  chargerMatchs() {
    const maintenant = new Date();

    // Séparer les matchs futurs et passés
    const futurs = this.tousLesMatchs
      .filter(m => m.date >= maintenant)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    const passes = this.tousLesMatchs
      .filter(m => m.date < maintenant)
      .sort((a, b) => b.date.getTime() - a.date.getTime());

    // Le prochain match est le premier des matchs futurs
    this.prochainMatch = futurs.length > 0 ? futurs[0] : null;
    
    // Les matchs à venir sont tous les matchs futurs sauf le premier
    this.matchsAVenir = futurs.slice(1);
    
    // Les matchs précédents
    this.matchsPrecedents = passes;
  }

  ouvrirBilleterie(url: string) {
    window.open(url, '_blank');
  }

  retour() {
    // Navigation vers la page d'accueil ou précédente
    window.history.back();
  }
}