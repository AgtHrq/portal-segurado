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
  uploadForm3: FormGroup;
  uploadForm4: FormGroup;
  uploadForm5: FormGroup;
  uploadForm6: FormGroup;
  uploadForm7: FormGroup;
  uploadForm8: FormGroup;
  uploadForm9: FormGroup;
  file: any;
  file2: any;
  file3: any;
  file4: any;
  file5: any;
  file6: any;
  file7: any;
  file8: any;
  file9: any;
  showLoader: boolean = false;
  showModal: boolean = false;
  //versao: number;
  message: string;
  state: boolean = false;

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService) { }

  ngOnInit() {

    this.uploadForm = this.fb.group({

      file: ['', Validators.required],
      file2: ['', Validators.required],
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
    this.uploadForm3 = this.fb.group({

      file3: ['', Validators.required]
    });
    this.uploadForm4 = this.fb.group({

      file4: ['', Validators.required]
    });
    this.uploadForm5 = this.fb.group({

      file5: ['', Validators.required]
    });
    this.uploadForm6 = this.fb.group({

      file6: ['', Validators.required]
    });
    this.uploadForm7 = this.fb.group({

      file7: ['', Validators.required]
    });
    this.uploadForm8 = this.fb.group({

      file8: ['', Validators.required]
    });
    this.uploadForm9 = this.fb.group({

      file9: ['', Validators.required]
    });
  }

  upload(file){
    this.file = file;
  }
  upload2(file){
    this.file2 = file;
  }
  upload4(file){
    this.file4 = file;
  }
  upload5(file){
    this.file5 = file;
  }
  upload6(file){
    this.file6 = file;
  }
  upload7(file){
    this.file7 = file;
  }
  upload3(file){
    this.file3 = file;
  }
  upload8(file){
    this.file8 = file;
  }
  upload9(file){
    this.file9 = file;
  }

  // sendArchive(event, form){

  //   event.preventDefault();
  //   delete form.file
  //   this.showLoader = true;
  //   this.uploadService.uploadDirf(this.file, form).pipe(
  //     finalize(() => {
  //       this.showLoader = false;
  //       this.limpaForm();
  //     })
  //   ).subscribe(() => {
  //     this.message = 'Upload realizado com sucesso!';
  //     this.showModal = true;
  //   }, e => {
  //     this.showLoader = false;
  //     this.showModal = true;
  //     this.message = 'Ocorreu um erro ao realizar o upload.';
  //     if (e._body){
  //       if(e._body.includes('file exceeds its maximum')){
  //         this.message = 'O arquivo enviando tem mais de 2MB.';
  //       }
  //     }
  //   }
  //   );
  // }

  limpaForm(): void{

    this.uploadForm.get('ano').setValue('');
    this.file = null;
  }

  changeState(){
    this.state = !this.state;
  }

}
