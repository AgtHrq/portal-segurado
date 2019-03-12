import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType, RequestOptions } from '@angular/http';

import { Authorization } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  
  // url = "http://www.pbprev.pb.gov.br:8080/portal-api";
  url = "http://localhost:8080"
  
  constructor(private http: Http, private auth: Authorization, private httpClient: HttpClient) { }
  
  unprotectedRequest(url: string, method: string, params?: Object, paramHeader?: boolean) {
    
    if (method.toLowerCase() === "post") {

      return this.http.post(`${this.url}/${url}`, params);

    } else if (method.toLowerCase() === "get") {

      // let sParams: URLSearchParams = new URLSearchParams();

      // for (let p in params){

      //   if (params.hasOwnProperty(p)){
      //     sParams.set(p, params[p]);
      //   }

      // }
      
      if(paramHeader) return this.http.get(`${this.url}/${url}`, { params:  params });
      return this.http.get(`${this.url}/${url}`);

    }

  }

  protectedRequest(url: string, method: string, params?: Object, paramsHeader?: object) {

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.auth.getToken()}`);

    if (method.toLowerCase() === 'post') {

      return params === null ? this.http.post(`${this.url}/protegido/${url}`, null, { headers: headers , params: { payload: paramsHeader } }) :
        this.http.post(`${this.url}/protegido/${url}`, params, { headers: headers });
    
    } else if (method.toLowerCase() === 'get') {

      // let sParams: URLSearchParams = new URLSearchParams();

      // for(let p in params) {

      //   if(params.hasOwnProperty(p)) {
      //     sParams.set(p, params[p]);
      //   }

      // }

      if(paramsHeader != null){

        return this.http.get(`${this.url}/protegido/${url}`, { params: paramsHeader, headers: headers }); 
         
      }

      return this.http.get(`${this.url}/protegido/${url}`, {
        // search: sParams,
        headers: headers
      });

    }

  }

  protectedDowloadRequest(url: string, params?, method?){

    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.auth.getToken()}`);
    if (method === 'get'){
      return this.http.get(`${this.url}/protegido/${url}`, { headers: headers, params: params, responseType: ResponseContentType.Blob });  
    }
    return this.http.post(`${this.url}/protegido/${url}`, params, { headers: headers, responseType: ResponseContentType.Blob });
  }

  unprotectedDowloadRequest(url: string, params?){

    return params ? this.http.get(`${this.url}/${url}/${params.token}`, { responseType: ResponseContentType.Blob }) : 
    this.http.get(`${this.url}/${url}`, { responseType: ResponseContentType.Blob });
  }

  unprotectedHttpClientRequst(url: string, method: string, params?){

    if (method.toLowerCase() === 'post'){

      let headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${this.auth.getToken()}`);

      this.httpClient.post(`${this.url}/protegido/${url}`, params, { headers: headers })

    } else if (method.toLowerCase() === 'get'){

      return this.httpClient.get(`${this.url}/${url}`, { params: params });
    }
  }

  
  getHost(): string {
    
    return this.url;
  }

}
