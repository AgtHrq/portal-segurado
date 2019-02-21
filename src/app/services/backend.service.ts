import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType } from '@angular/http';

import { Authorization } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  // url = "10.10.1.3:6070/portal-api";
  url = "localhost:8080"
  
  constructor(private http: Http, private auth: Authorization) { }
  
  unprotectedRequest(url: string, method: string, params?: Object, paramHeader?: boolean) {
    
    if (method.toLowerCase() === "post") {

      return this.http.post(`http://${this.url}/${url}`, params);

    } else if (method.toLowerCase() === "get") {

      // let sParams: URLSearchParams = new URLSearchParams();

      // for (let p in params){

      //   if (params.hasOwnProperty(p)){
      //     sParams.set(p, params[p]);
      //   }

      // }
      
      if(paramHeader) return this.http.get(`http://${this.url}/${url}`, { params:  params });
      return this.http.get(`http://${this.url}/${url}`);

    }

  }

  protectedRequest(url: string, method: string, params?: Object, paramsHeader?: object) {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.auth.getToken()}`);

    if (method.toLowerCase() === 'post') {

      return params === null ? this.http.post(`http://${this.url}/protegido/${url}`, null, { headers: headers , params: { payload: paramsHeader } }) :
        this.http.post(`http://${this.url}/protegido/${url}`, params, { headers: headers });
    
    } else if (method.toLowerCase() === 'get') {

      // let sParams: URLSearchParams = new URLSearchParams();

      // for(let p in params) {

      //   if(params.hasOwnProperty(p)) {
      //     sParams.set(p, params[p]);
      //   }

      // }

      if(paramsHeader != null){

        return this.http.get(`http://${this.url}/protegido/${url}`, { params: paramsHeader, headers: headers }); 
         
      }

      return this.http.get(`http://${this.url}/protegido/${url}`, {
        // search: sParams,
        headers: headers
      });

    }

  }

  protectedDowloadRequest(url: string, params?, method?){

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.auth.getToken()}`);
    if (method === 'get'){
      return this.http.get(`http://${this.url}/protegido/${url}`, { headers: headers, params: params, responseType: ResponseContentType.Blob });  
    }
    return this.http.post(`http://${this.url}/protegido/${url}`, params, { headers: headers, responseType: ResponseContentType.Blob });
  }

  unprotectedDowloadRequest(url: string, params?){

    return params ? this.http.get(`http://${this.url}/${url}/${params.token}`, { responseType: ResponseContentType.Blob }) : 
    this.http.get(`http://${this.url}/${url}`, { responseType: ResponseContentType.Blob });
  }

  
  getHost(): string {
    
    return 'http://' + this.url;
  }

}
