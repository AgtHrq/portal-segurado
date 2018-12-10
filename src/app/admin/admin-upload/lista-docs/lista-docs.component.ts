import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ElementRef } from '@angular/core';

import { AdminUploadService } from 'src/app/services/admin-upload/admin-upload.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lista-docs',
  templateUrl: './lista-docs.component.html',
  styleUrls: ['./lista-docs.component.css']
})
export class ListaDocsComponent implements OnInit {

  fileUrl: any = '';
  docs: any;
  nome_doc: string;
  showLoader: boolean = true;
  showModal: boolean = false;
  versao: number;
  message: string;
  dataGeracao = new Date();

  constructor(private adminUploadService: AdminUploadService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.adminUploadService.getDocs().subscribe(
      d => {
        this.showLoader = false;
        this.docs = d.json();
      },
      err => {
        this.showLoader = false;
        this.message = err.json().message;
        this.showModal = true;
      });
  }

  abrirDoc(elementA, versao){

    this.showLoader = true;
    this.adminUploadService.getDocPdf(versao).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe(
      d => {
        let doc = new Blob([d.blob()], { type: 'application/pdf' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(doc));
        elementA.href = this.fileUrl.changingThisBreaksApplicationSecurity;
        elementA.click();
      },
    err => {
      this.showModal = true;
      let mess = new Blob([err.blob()]);
      console.log(mess);
    });
  }

}
