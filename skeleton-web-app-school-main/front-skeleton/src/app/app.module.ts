import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"


import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { MatListModule } from "@angular/material/list"

import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"

import { HttpClientModule } from "@angular/common/http"
import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { HomeComponent } from "./home/home.component"
import { AppRoutingModule } from "./app-routing.module"



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
