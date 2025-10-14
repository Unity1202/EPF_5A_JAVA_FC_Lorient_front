import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth/LoginUser';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<'user' | 'admin' | 'unauthorized'> {
    return this.http.post(this.apiUrl, { email, password }, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>): 'user' | 'admin' | 'unauthorized' => {
          if (response.status === 200) return 'user';
          if (response.status === 202) return 'admin';
          return 'unauthorized';
        }),
        catchError(() => of<'unauthorized'>('unauthorized')) 
      );
  }
}
