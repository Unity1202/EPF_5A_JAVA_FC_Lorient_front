import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { ForumMessage } from "../models/message.model";

@Injectable({ providedIn: "root" })
export class ForumService {
  private readonly baseUrl = (environment as any).apiBaseUrl || "";

  constructor(private http: HttpClient) {}

  getMessages(): Observable<ForumMessage[]> {
    return this.http.get<ForumMessage[]>(`${this.baseUrl}/forums`);
  }

  postMessage(payload: { userId: number; message: string; createdAt?: string }): Observable<ForumMessage> {
    return this.http.post<ForumMessage>(`${this.baseUrl}/forums`, payload);
  }
}


