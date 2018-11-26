import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validar-pdf',
  templateUrl: './validar-pdf.component.html',
  styleUrls: ['./validar-pdf.component.css']
})
export class ValidarPdfComponent implements OnInit {

  formToken: FormGroup;
  showLoader = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formToken = this.fb.group({
      token: ['', Validators.compose(
        [Validators.required, Validators.minLength(36), Validators.maxLength(36)]
      )]
    })
  }

  validarPDF(event, token){

    event.preventDefault();
    console.log(token);

  }

}
