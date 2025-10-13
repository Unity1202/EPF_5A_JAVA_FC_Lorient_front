import { Component } from "@angular/core";
import { ForumService } from "../services/forum.service";
import { ForumMessage } from "../models/message.model";
 

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"],
})
export class ForumComponent {
  messages: ForumMessage[] = []
  userId: number | null = null
  message: string = ""
 

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.loadMessages()
  }

  loadMessages(): void {
    this.forumService.getMessages().subscribe((msgs) => {
      this.messages = msgs
    })
  }
 

  sendMessage(): void {
    const uid = this.userId ?? 0
    const msg = this.message.trim()
    if (!uid || !msg) return

    this.forumService
      .postMessage({ userId: uid, message: msg })
      .subscribe(() => {
        this.message = ""
        this.loadMessages()
      })
  }
}


