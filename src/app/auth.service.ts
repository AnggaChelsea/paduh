import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = 'http://localhost:4000/users/';
  constructor(private http: HttpClient) { }
  signIn(user: any) {
    return this.http.post<any>(`${this.api}authenticate`, user);
  }
  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
