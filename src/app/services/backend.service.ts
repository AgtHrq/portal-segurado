import { Authorization } from './jwt.service';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

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

}
