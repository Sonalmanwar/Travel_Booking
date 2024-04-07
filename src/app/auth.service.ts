import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// const LoginUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  // constructor(private http: HttpClient) { }

  // loginuser(credentials: any): Observable<any> {
  //   return this.http.post<any>(LoginUrl, 'logicheck', credentials);
  // }

  private loginUrl = 'http://localhost:8080/logincheck'; // Replace with your backend login endpoint

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password });
  }
}
