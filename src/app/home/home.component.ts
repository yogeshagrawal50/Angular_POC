import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route:Router, private _authService:AuthService) { }

  ngOnInit(): void {
  }

  onClickLoad(){
    this._route.navigate(['servers']);
  }
  logIn(){
    this._authService.login();
  }
  logOut(){
    this._authService.logOut()
  }
}
