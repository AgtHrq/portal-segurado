import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { PdfTokenService } from './../../services/pdf-token/pdf-token.service';

@Component({
  selector: 'app-validar-pdf',
  templateUrl: './validar-pdf.component.html',
  styleUrls: ['./validar-pdf.component.css']
})
export class ValidarPdfComponent implements OnInit {

  formToken: FormGroup;
  showLoader = false;
  fileUrl;
  successMessage: string;
  errorMessage: string;

  constructor(private fb: FormBuilder, private pdfService: PdfTokenService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.formToken = this.fb.group({
      token: ['', Validators.compose(
        [Validators.required, Validators.minLength(36), Validators.maxLength(36)]
      )]
    })
  }

  validarPDF(event, token){
    event.preventDefault();
    this.successMessage = null;
    this.errorMessage = null;  
    this.showLoader = true;
    this.pdfService.validarDocumento(token).subscribe(p =>{
      this.showLoader = false;
      this.successMessage = 'Documento válido.';
      let pdf = new Blob([p.blob()], { type: 'application/pdf; documento' });
      this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(pdf));
    },
    () => {
      this.showLoader = false;
      this.errorMessage = 'Documento expirado ou não gerado.';
    });
  }

}
