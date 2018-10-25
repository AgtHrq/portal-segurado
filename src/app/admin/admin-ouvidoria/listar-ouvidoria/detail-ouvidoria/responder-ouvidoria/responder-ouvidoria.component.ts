import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ouvidoria } from 'src/app/models/ouvidoria';

@Component({
  selector: 'app-responder-ouvidoria',
  templateUrl: './responder-ouvidoria.component.html',
  styleUrls: ['./responder-ouvidoria.component.css'],
})
export class ResponderOuvidoriaComponent implements OnInit {

  
  @Output() toggle = new EventEmitter<boolean>();
  @Input() ouvidoria:Ouvidoria;
  formResponder: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formResponder = this.formBuilder.group({

      resposta: ['', Validators.required]

    });
  }

  toggleState(){
    this.toggle.emit(false);
  }

}
