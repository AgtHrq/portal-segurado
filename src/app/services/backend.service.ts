import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Authorization } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  url = "localhost:8090";
  
  constructor(private http: Http, private auth: Authorization) { }
  
  unprotectedRequest(url: string, method: string, params?: Object) {
    
    if (method.toLowerCase() === "post") {

      return this.http.post(`http://${this.url}/${url}`, params);

    } else if (method.toLowerCase() === "get") {

      let sParams: URLSearchParams = new URLSearchParams();

      for (let p in params){

        if (params.hasOwnProperty(p)){
          sParams.set(p, params[p]);
        }

      }

      return this.http.get(`http://${this.url}/${url}`, {
        search: sParams
      });

    }

  }

  protectedRequest(url: string, method: string, params?: Object) {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.auth.getToken()}`);

    if (method.toLowerCase() === 'post') {
      
      return this.http.post(`http://${this.url}/protegido/${url}`, params, { headers: headers });
    
    } else if (method.toLowerCase() === 'get') {

      let sParams: URLSearchParams = new URLSearchParams();

      for(let p in params) {

        if(params.hasOwnProperty(p)) {
          sParams.set(p, params[p]);
        }

      }

      return this.http.get(`http://${this.url}/protegido/${url}`, {
        search: sParams,
        headers: headers
      });

    }

  }

}
