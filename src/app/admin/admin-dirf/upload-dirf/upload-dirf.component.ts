import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { MaskUtils } from './../../../utils/mask-utils';
import { AdminUploadService } from 'src/app/services/admin-upload/admin-upload.service';
import { finalize } from 'rxjs/operators/';

@Component({
  selector: 'app-upload-dirf',
  templateUrl: './upload-dirf.component.html',
  styleUrls: ['./upload-dirf.component.css']
})
export class UploadDirfComponent implements OnInit, AfterViewInit {

  file: any;
  uploadForm: FormGroup;
  showLoader: boolean = false;
  showModal: boolean = false;
  message: string;

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService, private utils: MaskUtils) { }

  ngOnInit() {
    
    this.uploadForm = this.fb.group({

      file: ['', Validators.required],
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

  ngAfterViewInit(){

    this.utils.yearMask('ano');
  }

  upload(file){

    this.file = file;
  }

  sendArchive(event, form){

    event.preventDefault();
    delete form.file
    this.showLoader = true;
    this.uploadService.uploadDirf(this.file, form).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(() => {
      this.message = 'Upload realizado com sucesso!';
      this.showModal = true;
    }, e => {
      this.showLoader = false;
      this.showModal = true;
      this.message = 'Ocorreu um erro ao realizar o upload.';
      if (e._body){
        if(e._body.includes('file exceeds its maximum')){
          this.message = 'O arquivo enviando tem mais de 2MB.'
        }
      }
    }
    );
  }

}
