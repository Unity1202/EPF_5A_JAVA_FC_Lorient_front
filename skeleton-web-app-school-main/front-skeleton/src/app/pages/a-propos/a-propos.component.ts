import { Component } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent {
  clubInfo = {
    nom: 'FC Lorient',
    fondation: 1926,
    stade: 'Stade du Moustoir',
    couleur: 'Orange et Noir',
    siteWeb: 'https://fclorient.bzh'
  };

  reseaux = [
    { nom: 'Facebook', url: 'https://www.facebook.com/FCLorient', icone: 'assets/icons/facebook.png' },
    { nom: 'Twitter', url: 'https://twitter.com/FCLorient', icone: 'assets/icons/twitter.png' },
    { nom: 'Instagram', url: 'https://www.instagram.com/fclorient/', icone: 'assets/icons/instagram.png' }
  ];
}
