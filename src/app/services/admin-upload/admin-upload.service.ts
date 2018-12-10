import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Authorization} from '../jwt.service';
import { BackendService } from './../backend.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUploadService {

  constructor(private backendService: BackendService) { }

  uploadTermo(file: File){

    const dataForm = new FormData();
    dataForm.append('file', file);
    return this.backendService.protectedRequest('usuarios/uploadFile', 'post', dataForm);
    
  }

  getLatestVersion(){

    return this.backendService.protectedRequest('usuarios/latestVersion', 'get');
  }

  getDocs(){

    return this.backendService.protectedRequest('usuarios/getDocs', 'get');
  }

  getDocPdf(versao: number){

    return this.backendService.protectedDowloadRequest('usuarios/getDocumentoTermoPdf/' + versao);
  }
}
