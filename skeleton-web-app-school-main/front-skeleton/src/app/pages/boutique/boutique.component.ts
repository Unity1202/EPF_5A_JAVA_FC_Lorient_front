import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Ajout de Router

interface Produit {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.scss']
})

export class BoutiqueComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private http: HttpClient, private router: Router) {} // Ajout de Router dans le constructeur

  ngOnInit(): void {
    this.fetchProduits();
  }

  fetchProduits(): void {
    this.http.get<Produit[]>('http://localhost:8080/stores').subscribe(data => {
      console.log('Produits reçus:', data);
      this.produits = data;
    });
  }

  goToArticle(): void { // Nouvelle fonction
    window.open(`https://boutique.fclorient.bzh/fr/`);
  }
  
  
}
