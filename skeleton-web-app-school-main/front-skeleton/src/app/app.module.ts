import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from 'navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BoutiqueComponent } from 'pages/boutique/boutique.component';
import { ListeJoueursComponent } from 'pages/liste-joueurs/liste-joueurs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BoutiqueComponent,
    ListeJoueursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
