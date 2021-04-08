import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaskUtils } from './../../../utils/mask-utils';
import { AdminUploadService } from 'src/app/services/admin-upload/admin-upload.service';
import { finalize } from 'rxjs/operators/';

@Component({
  selector: 'app-upload-dados',
  templateUrl: './upload-dados.component.html',
  styleUrls: ['./upload-dados.component.css']
})
export class UploadDadosComponent implements OnInit {

  uploadForm: FormGroup;
  fileCad: any;
  fileVds: any;
  
  showLoader: boolean = false;
  showModal: boolean = false;
  //versao: number;
  message: string;
  state: boolean = false;

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService) { }

  ngOnInit() {

    this.uploadForm = this.fb.group({

      fileCad: ['', Validators.required],
      fileVds: ['', Validators.required],
      mes: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2),
        Validators.min(1),
        Validators.max(12)
      ])],
      ano: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(4),
        Validators.minLength(4),
        Validators.pattern(/^\d{4}$/),
        Validators.min(1900),
        Validators.max(new Date().getFullYear())
      ])]
    });
    
  }

  uploadCad(file){
    this.fileCad = file;
  }
  uploadVds(file){
    this.fileVds = file;
  }
 

  sendArchive(event, form){

    event.preventDefault();
    delete form.file
    this.showLoader = true;
    this.uploadService.uploadDados(this.fileCad, this.fileVds, form).pipe(
      finalize(() => {
        this.showLoader = false;
        this.limpaForm();
      })
    ).subscribe(() => {
      this.message = 'Upload realizado com sucesso!';
      this.showModal = true;
    }, e => {
      this.showLoader = false;
      this.showModal = true;
      this.message = 'Ocorreu um erro ao realizar o upload.';
      if (e._body){
        if(e._body.includes('file exceeds its maximum')){
          this.message = 'O arquivo enviando tem mais de 2MB.';
        }
      }
    }
    );
  }

  limpaForm(){

    this.uploadForm.get('ano').setValue('');
    this.fileCad = null;
    this.fileVds = null;

  }

  // changeState(){
  //   this.state = !this.state;
  // }

}
