import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin = true;
  isLoading = false;
  constructor(private auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
  onSwitch(){
    this.isLogin = !this.isLogin;
  }
  onSubmit(data:NgForm){
    console.log(data.value);
    if(!data.valid){
      return
    }
    const email = data.value.email;
    const password = data.value.password;
    this.isLoading = true;
    if(this.isLogin){
      this.auth.onLogin(email, password).subscribe((res)=>{
        console.log(res);
        this.isLoading= false;
        this.route.navigate(['home']);
      })
    }else{
      this.auth.signUp(email, password).subscribe((res)=>{
        console.log(res);
        this.isLoading= false;
      })
    }

    data.reset();
  }

}
