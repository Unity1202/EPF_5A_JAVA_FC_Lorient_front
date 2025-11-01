import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';

export interface LoginResponse {
  userId: number;
  firstName: string;
  userType: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/LoginUser';
  private currentUser: LoginResponse | null = null;
  private authStatusSubject = new BehaviorSubject<boolean>(false);
  public authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) {
    // Initialiser l'état de connexion au démarrage
    this.updateAuthStatus();
  }

  private updateAuthStatus(): void {
    const isLoggedIn = this.getCurrentUser() !== null;
    this.authStatusSubject.next(isLoggedIn);
  }

  login(email: string, password: string): Observable<LoginResponse | null> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password })
      .pipe(
        map((response: LoginResponse) => {
          this.currentUser = response;
          // Stocker dans localStorage pour persister la session
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.updateAuthStatus();
          return response;
        }),
        catchError(() => {
          this.currentUser = null;
          localStorage.removeItem('currentUser');
          this.updateAuthStatus();
          return of(null);
        })
      );
  }

  getCurrentUser(): LoginResponse | null {
    if (!this.currentUser) {
      const stored = localStorage.getItem('currentUser');
      if (stored) {
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.userType === 'admin';
  }

  isLoggedIn(): boolean {
    return this.getCurrentUser() !== null;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.updateAuthStatus();
  }

  getUserId(): number | null {
    const user = this.getCurrentUser();
    return user?.userId || null;
  }
}
