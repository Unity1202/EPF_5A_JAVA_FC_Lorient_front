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
import { ForumComponent } from "./forum/forum.component"



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ForumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
