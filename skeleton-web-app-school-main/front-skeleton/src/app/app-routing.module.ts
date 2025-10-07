import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListeJoueursComponent } from 'pages/liste-joueurs/liste-joueurs.component';
import { BoutiqueComponent } from 'pages/boutique/boutique.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  {  path: 'equipe', component: ListeJoueursComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
