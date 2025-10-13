import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Message } from "../models/message.model";

@Injectable({ providedIn: "root" })
export class ForumService {
  private readonly baseUrl = (environment as any).apiBaseUrl || "";

  constructor(private http: HttpClient) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.baseUrl}/api/messages`);
  }

  postMessage(payload: { author: string; content: string }): Observable<Message> {
    return this.http.post<Message>(`${this.baseUrl}/api/messages`, payload);
  }
}


