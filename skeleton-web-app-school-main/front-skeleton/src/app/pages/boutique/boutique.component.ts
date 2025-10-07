import { Component } from '@angular/core';

interface Produit {
  nom: string;
  prix: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})
export class BoutiqueComponent {
  produits: Produit[] = [
    { nom: 'Maillot Domicile 2025', prix: 79.99, image: 'assets/maillot.png', description: 'Maillot officiel du FC Lorient 2025.' },
    { nom: 'Écharpe du Club', prix: 24.99, image: 'assets/echarpe.png', description: 'Écharpe orange et noire, symbole de fierté.' },
    { nom: 'Casquette Officielle', prix: 19.99, image: 'assets/casquette.png', description: 'Casquette brodée avec le logo du club.' }
  ];
}
