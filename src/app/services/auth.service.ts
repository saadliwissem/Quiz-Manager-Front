import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3117/auth/'; // Replace this with your backend API URL

  constructor(private http: HttpClient) { }

  register(fullName: string, email: string, password: string): Observable<any> {
    const body = { fullName, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, body);
  }
  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, body);
  }
}
