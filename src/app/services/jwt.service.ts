import { Injectable } from '@angular/core';
//var jwt = require("jwt-decode");

@Injectable({
  providedIn: 'root'
})
export class Authorization {

  constructor(){}

  loggedInfo(){
  
  //  return jwt(this.getToken());
  
  }

  setToken(token: string){

    localStorage.setItem("authToken", token);
  
  }

  getToken(){

    return localStorage.getItem("authToken");

  }

  deleteToken(){

    localStorage.removeItem("authToken");

  }

  isLogged(): boolean {

    if(localStorage.getItem("authToken")) return true;
    else return false;

  }

}
