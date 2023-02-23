import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:Boolean = false;
  constructor(private http:HttpClient) { }

  login(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  isAuthenticated(){
    return this.loggedIn;
  }
  signUp(email, password){
   return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD45Z6gN6j2ygcd4GtN50O5oDkofzCjnos',{
      email:email,
      password:password,
      returnSecureToken: true
    });
  }

  onLogin(email, password){
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD45Z6gN6j2ygcd4GtN50O5oDkofzCjnos',{
      email:email,
      password:password,
      returnSecureToken: true
    })
  }


}
