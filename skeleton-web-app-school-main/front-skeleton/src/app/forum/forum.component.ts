import { Component } from "@angular/core";
import { ForumService } from "../services/forum.service";
import { Message } from "../models/message.model";
 

@Component({
  selector: "app-forum",
  templateUrl: "./forum.component.html",
  styleUrls: ["./forum.component.scss"],
})
export class ForumComponent {
  messages: Message[] = []
  author: string = ""
  content: string = ""
 

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
    const trimmedContent = this.content.trim()
    const trimmedAuthor = this.author.trim()
    if (!trimmedAuthor || !trimmedContent) return

    this.forumService
      .postMessage({ author: trimmedAuthor, content: trimmedContent })
      .subscribe(() => {
        this.content = ""
        this.loadMessages()
      })
  }
}


