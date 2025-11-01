import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Forum } from "../models/message.model";
import { AuthService } from "../auth-service.service";

@Injectable({ providedIn: "root" })
export class ForumService {
  private readonly baseUrl = (environment as any).apiBaseUrl || "";

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getForums(): Observable<Forum[]> {
    return this.http.get<Forum[]>(`${this.baseUrl}/forums`);
  }

  createForum(message: string): Observable<Forum> {
    const userId = this.authService.getUserId();
    if (!userId) {
      throw new Error("Vous devez être connecté pour envoyer un message");
    }

    const headers = new HttpHeaders({
      'X-User-Id': userId.toString()
    });

    // Envoyer seulement le message, l'userId sera récupéré depuis le header
    return this.http.post<Forum>(
      `${this.baseUrl}/forums`, 
      { message: message },
      { headers: headers }
    );
  }
}


