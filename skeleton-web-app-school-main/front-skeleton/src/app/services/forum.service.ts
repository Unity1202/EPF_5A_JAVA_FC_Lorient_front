import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Forum } from "../models/message.model";

@Injectable({ providedIn: "root" })
export class ForumService {
  private readonly baseUrl = (environment as any).apiBaseUrl || "";

  constructor(private http: HttpClient) {}

  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.baseUrl}/forums`);
  }

  createForum(payload: { userId: number; message: string }): Observable<Forum> {
    return this.http.post<Forum>(`${this.baseUrl}/forums`, payload);
  }
}


