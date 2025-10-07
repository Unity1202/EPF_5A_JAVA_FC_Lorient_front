import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"



import { AppComponent } from "./app.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { HomeComponent } from "./home/home.component"
import { AppRoutingModule } from "./app-routing.module"
import { CommonModule } from "@angular/common"



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
