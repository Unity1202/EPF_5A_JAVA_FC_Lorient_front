import { Component } from "@angular/core";
import { ForumService } from "../services/forum.service";
import { Forum } from "../models/message.model";
 

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"],
})
export class ForumComponent {
  messages: Forum[] = []
  userId: number | null = null
  message: string = ""
 

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.loadMessages()
  }

  loadMessages(): void {
    this.forumService.getForums().subscribe((msgs) => {
      this.messages = msgs
    })
  }
 

  sendMessage(): void {
    const trimmedMessage = this.message.trim()
    if (this.userId == null || !trimmedMessage) return
    const numericUserId = Number(this.userId)
    if (!Number.isFinite(numericUserId) || numericUserId <= 0) {
      alert('Echec envoi: userId invalide')
      return
    }
    this.forumService
      .createForum({ userId: numericUserId, message: trimmedMessage })
      .subscribe({
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
}


