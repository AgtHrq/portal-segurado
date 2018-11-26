import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastraNotificacaoService } from 'src/app/services/cadastra-notificacao/cadastra-notificacao.service';
import { Orgao } from 'src/app/models/orgao';
import { SendIdOrgaoService } from 'src/app/services/send-id-orgao/send-id-orgao.service';
import { OrgaosFilterService } from 'src/app/services/orgaos-filter/orgaos-filter.service';
import { checkOrgaoCargo } from 'src/app/validators/createPassword.validator';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-notificacao',
  templateUrl: './cadastro-notificacao.component.html',
  styleUrls: ['./cadastro-notificacao.component.css']
})
export class CadastroNotificacaoComponent implements OnInit {

  formNotificacao: FormGroup;
  orgaos: Orgao[] = [];
  cargos = [];
  element:boolean = true;
  showConfirmModal: boolean = false;
  showLoader:boolean = false;
  showMessage: boolean = false;
  messageInfo: string = '';
  infoSucess:boolean = false;


  constructor(private formBuilder: FormBuilder, private notificacaoService: CadastraNotificacaoService,
      private orgaosfilterService: OrgaosFilterService, private sendIdOrgaoService: SendIdOrgaoService,
      private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.formNotificacao = this.formBuilder.group({
      descricao: ["", Validators.compose(
        [Validators.required, Validators.maxLength(255)]
      )],
      tempoExpiracao: ["", Validators.compose(
        [Validators.required]
      )],

      idOrgao: [""],

      idCargo: [""]
    });

    this.formNotificacao.setValidators([ checkOrgaoCargo ]);

    this.orgaosfilterService.getFilterOrgaos().subscribe(
      orgaos => {
        this.orgaos = orgaos.json();
        console.log(this.orgaos);
      }
    );
  }

  sendIdOrgao(evento){

    this.sendIdOrgaoService.getListCargos(evento).subscribe(
      cargos => {
        console.log(cargos.json());
        this.cargos = cargos.json();
        this.element = false;
      }, erro => console.log(erro)
    )

  }

  limpaCampos(){
    this.formNotificacao.get('descricao').setValue("");
    this.formNotificacao.get('tempoExpiracao').setValue("");
    this.formNotificacao.get('idOrgao').setValue("");
    this.formNotificacao.get('idCargo').setValue("");
    this.showConfirmModal = false;
  }

  buttonModal(msg: string){
    if(msg === "Login expirado, efetue o login novamente!"){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else {
      this.limpaCampos();
    }
  }
  

  sendNotificacao(event, notificacao){
    event.preventDefault();
    this.showLoader = true;
    console.log(notificacao);

    this.notificacaoService.sendNotificacao(notificacao).subscribe(
      notificacao => {
        this.showLoader = false;
        this.showConfirmModal = true;
        this.messageInfo = "Notificação cadastrada com sucesso!";
      },
      error => {
        this.showLoader = false;
        if(error.json().message.trim() === 'Invalid Token'){
          this.messageInfo = 'Login expirado, efetue o login novamente!';
        }else {
          this.messageInfo = error.json().message;
        }
        this.showConfirmModal = true;
      }
    );

  }

}
