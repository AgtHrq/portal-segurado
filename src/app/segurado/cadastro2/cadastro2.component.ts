import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { maskUtils } from '../mask-utils';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.css']
})
export class Cadastro2Component implements OnInit {
  meuForm: FormGroup;
  constructor(formBuilder: FormBuilder) {
    
    this.meuForm = formBuilder.group({


    })
  }

  ngOnInit() {
  }

  cadastra(event){

    event.preventDefault();
    
  }

}
