import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"



import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { HomeComponent } from "./home/home.component"
import { AppRoutingModule } from "./app-routing.module"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {  HttpClientModule } from "@angular/common/http"
import { ForumComponent } from "forum/forum.component"
import { BoutiqueComponent } from "pages/boutique/boutique.component"
import { ListeJoueursComponent } from "pages/liste-joueurs/liste-joueurs.component"
import { AProposComponent } from "pages/a-propos/a-propos.component"
import { LoginComponent } from "pages/login/login.component"
import { RegisterComponent } from "pages/register/register.component"



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BoutiqueComponent,
    ListeJoueursComponent,
    ForumComponent,
    AProposComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,  
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
