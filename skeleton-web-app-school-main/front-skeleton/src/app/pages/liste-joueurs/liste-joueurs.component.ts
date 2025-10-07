import { Component } from '@angular/core';

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
export class ListeJoueursComponent {
  joueurs: Joueur[] = [
    { nom: 'Paul Nardi', poste: 'Gardien', numero: 1, photo: 'assets/joueurs/nardi.png' },
    { nom: 'Montassar Talbi', poste: 'Défenseur', numero: 15, photo: 'assets/joueurs/talbi.png' },
    { nom: 'Julien Ponceau', poste: 'Milieu', numero: 21, photo: 'assets/joueurs/ponceau.png' },
    { nom: 'Eli Kroupi', poste: 'Attaquant', numero: 9, photo: 'assets/joueurs/kroupi.png' }
  ];
}
