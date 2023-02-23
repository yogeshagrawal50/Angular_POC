import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { 
    const testvar = 'karnika';
  }

  alertBoxMessage(){
    alert('Hi, I am clicked!');
  }
}
