import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AdminUploadService } from './../../../services/admin-upload/admin-upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  file: any;
  uploadForm: FormGroup;
  showLoader: boolean = true;
  showModal: boolean = false;
  versao: number;
  message: string;
  dataGeracao = new Date();

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService) { }

  ngOnInit() {

    this.uploadService.getLatestVersion().subscribe(h => {
      this.versao = h.json() as number;
      this.showLoader = false;
    });

    this.uploadForm = this.fb.group({

      file: ['', Validators.required]
    });
  }

  upload(file){

    this.file = file;
  }

  sendArchive(event){

    event.preventDefault();
    this.showLoader = true;
    this.uploadService.uploadTermo(this.file).subscribe(
      () => {
        this.showLoader = false;
        this.versao ++;
        this.dataGeracao = new Date();
        this.showModal = true;
        this.message = 'Upload realizado com sucesso.';
      }, () => {
        this.showLoader = false;
        this.showModal = true;
        this.message = 'Ocorreu um erro ao realizar o upload.';
      }
    );
  }

}
