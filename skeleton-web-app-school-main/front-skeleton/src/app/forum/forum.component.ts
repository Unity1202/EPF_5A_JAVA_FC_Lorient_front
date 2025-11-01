import { Component } from "@angular/core";
import { ForumService } from "../services/forum.service";
import { AuthService } from "../auth-service.service";
import { Router } from "@angular/router";
import { Forum } from "../models/message.model";
 

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"],
})
export class ForumComponent {
  messages: Forum[] = []
  message: string = ""
  isLoggedIn: boolean = false
  userFirstName: string | null = null

  constructor(
    private forumService: ForumService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkAuth()
    this.loadMessages()
  }

  checkAuth(): void {
    this.isLoggedIn = this.authService.isLoggedIn()
    const currentUser = this.authService.getCurrentUser()
    this.userFirstName = currentUser?.firstName || null
  }

  loadMessages(): void {
    this.forumService.getForums().subscribe((msgs) => {
      this.messages = msgs
    })
  }

  sendMessage(): void {
    const trimmedMessage = this.message.trim()
    if (!trimmedMessage || !this.isLoggedIn) {
      alert('Vous devez être connecté pour envoyer un message')
      return
    }

    this.forumService.createForum(trimmedMessage).subscribe({
      next: () => {
        this.message = ""
        this.loadMessages()
      },
      error: (err) => {
        const msg = (err && err.error) ? err.error : 'Erreur inconnue'
        alert(`Echec envoi: ${msg}`)
      }
    })
  }

  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }
}
