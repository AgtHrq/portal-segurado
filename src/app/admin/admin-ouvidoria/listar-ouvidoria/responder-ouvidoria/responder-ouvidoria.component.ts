import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Ouvidoria } from 'src/app/models/ouvidoria';
import { SendRespostaOuvidoriaService } from 'src/app/services/send-resposta-ouvidoria/send-resposta-ouvidoria.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-responder-ouvidoria',
  templateUrl: './responder-ouvidoria.component.html',
  styleUrls: ['./responder-ouvidoria.component.css'],
})
export class ResponderOuvidoriaComponent implements OnInit {

  
  @Output() toggle = new EventEmitter<boolean>();
  @Input() ouvidoria:Ouvidoria;
  formResponder: FormGroup;
  showConfirmModal: boolean = false;
  showAviso: boolean = false;
  showLoader:boolean = false;
  showMessage: boolean = false;
  msgInfo: string = '';
  message = '';
  totalCaracteres: number = 255;
  
  constructor(private formBuilder: FormBuilder, private sendRespostaOuvidoriaService: SendRespostaOuvidoriaService,
              private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.formResponder = this.formBuilder.group({

      id: [this.ouvidoria.id],

      resposta: ['', Validators.required]

    });
  }

  toggleState(){
    this.toggle.emit(false);
  }

  confirm(event){

    event.preventDefault();
    this.msgInfo = 'Uma vez confirmada a resposta da Ouvidoria, não será permitida sua edição. Antes de confirmar verifique sua reposta.'
    this.showConfirmModal = true;

  }

  buttonModal(){
    this.userService.logoffUser();
    this.router.navigate(['/']);
  }

  sendRespostaOuvidoria(resposta){
    this.showLoader = true;
    this.showConfirmModal = false;

    this.sendRespostaOuvidoriaService.sendResposta(resposta).subscribe(
      () => {
        this.showLoader = false;
        this.toggle.emit(false);
      },
      error => {
        if(error.json().message.trim() === 'Invalid Token'){
          this.msgInfo = 'Login expirado, efetue o login novamente!';
          this.showAviso = true;
        }
        this.showMessage = true;
        this.message = 'Erro ao responder! Tente novamente em caso de persistir o error entre em contato com a informática.';
        this.showLoader = false;
      }
    );
  }

}
