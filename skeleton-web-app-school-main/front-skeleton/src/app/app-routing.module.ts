import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { ForumComponent } from "./forum/forum.component"
import { BoutiqueComponent } from "pages/boutique/boutique.component"
import { ListeJoueursComponent } from "pages/liste-joueurs/liste-joueurs.component"
import { AProposComponent } from "pages/a-propos/a-propos.component"
import { LoginComponent } from "pages/login/login.component"
import { RegisterComponent } from "pages/register/register.component"


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "forum", component: ForumComponent },
  { path: "boutique", component: BoutiqueComponent},
  { path: "equipe", component: ListeJoueursComponent },
  { path: "infos", component: AProposComponent },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "**", redirectTo: "", pathMatch: "full" },

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
