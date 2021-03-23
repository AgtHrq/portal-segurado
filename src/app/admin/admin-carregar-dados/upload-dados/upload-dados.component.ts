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
  file: any;
  showLoader: boolean = false;
  showModal: boolean = false;
  //versao: number;
  message: string;

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService) { }

  ngOnInit() {

    this.uploadForm = this.fb.group({

      file: ['', Validators.required],
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

  upload(file){

    this.file = file;
  }

}
