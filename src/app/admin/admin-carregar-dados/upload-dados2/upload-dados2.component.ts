import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminUploadService } from 'src/app/services/admin-upload/admin-upload.service';
import { finalize } from 'rxjs/operators/';

@Component({
  selector: 'app-upload-dados2',
  templateUrl: './upload-dados2.component.html',
  styleUrls: ['./upload-dados2.component.css']
})
export class UploadDados2Component implements OnInit {

  //Formulários
  uploadForm: FormGroup;
  uploadForm2: FormGroup;
  uploadForm3: FormGroup;
  uploadForm4: FormGroup;
  uploadForm5: FormGroup;
  uploadForm6: FormGroup;
  uploadForm7: FormGroup;

  //Arquivos
  file: any;
  file2: any;
  file3: any;
  file4: any;
  file5: any;
  file6: any;
  file7: any;


  //Demais variáveis
  showLoader: boolean = false;
  showModal: boolean = false;
  message: string;
  state: boolean = false;

  constructor(private fb: FormBuilder, private uploadService: AdminUploadService) { }

  ngOnInit() {

    this.uploadForm = this.fb.group({

      file: ['', Validators.required]

    });
    this.uploadForm2 = this.fb.group({

      file2: ['', Validators.required]

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

  }

  upload(file){
    this.file = file;
  }
  upload2(file){
    this.file2 = file;
  }
  upload3(file){
    this.file3 = file;
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

  sendArchive(event, form, file){

    event.preventDefault();
    delete form.file
    this.showLoader = true;
    this.uploadService.uploadDados2(file).pipe(
      finalize(() => {
        this.showLoader = false;
        // this.limpaForm();
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

}
