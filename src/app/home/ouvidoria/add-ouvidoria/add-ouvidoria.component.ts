import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { AddOuvidoriaService } from '../../../services/add-ouvidoria/add-ouvidoria.service';
import { UserService } from '../../../services/user.service';
import { TipoOuvidoriaService } from '../../../services/tipo-ouvidoria/tipo-ouvidoria.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ouvidoria',
  templateUrl: './add-ouvidoria.component.html',
  styleUrls: ['./add-ouvidoria.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-30%)' }),
        animate(300),
      ])
    ])
  ]
})
export class AddOuvidoriaComponent implements OnInit {

  formOuvidoria: FormGroup;
  user: User;
  tiposOuvidoria = [];
  msgInfo: string = '';
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  showLoader: boolean = false;

  constructor(private formBuilder: FormBuilder, private addOuvidoriaService: AddOuvidoriaService,
    private userService: UserService, private tipoOuvidoriaService: TipoOuvidoriaService,
    private router: Router) {  }
  
  ngOnInit() {

    this.userService.getLoggedUser().subscribe(
      user => {
        this.user = user;
      }
    );

    this.formOuvidoria = this.formBuilder.group({

      ouvidoriaTipo: this.formBuilder.group({
        descricao: ["", Validators.compose(
          [Validators.required]
        )],
        
        id: [""],

      }),
  
      descricao: ["", Validators.compose(
        [Validators.required, Validators.maxLength(255)]
      )],

      assunto: ["", Validators.compose(
        [Validators.required]
      )],

      email: [this.user.user_email, Validators.compose(
        [Validators.required, Validators.email]
      )],

    });

    this.tipoOuvidoriaService.getTipoOuvidoria().subscribe(
      tipo => {
        this.tiposOuvidoria = tipo.json();
      },
      error => {
        if(error.json().message.trim() === 'Invalid Token'){
          this.msgInfo = 'Login expirado, efetue o login novamente!'
        }else{
          this.msgInfo = error.json().message;
        }
        this.showConfirmModal = true;

      }
    );
  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else{
      this.showConfirmModal = false;
      this.limpaCampos();
    }
  }

  setId(event){
    this.tiposOuvidoria.forEach(element => {
      if(element.descricao === event.target.value){
        this.formOuvidoria.get('ouvidoriaTipo').get('id').setValue(element.id);
      }
    });

  }

  sendOuvidoria(event, ouvidoria){
    event.preventDefault();
    this.showLoader = true;

   this.addOuvidoriaService.sendBackOuvidoria(ouvidoria).subscribe(
     () => {
       this.showLoader = false;
       this.msgInfo = "Ouvidoria enviada com Sucesso";
       this.showConfirmModal = true;
     },
     error => {
      if(error.json().message === 'Invalid Token'){
        this.msgInfo = 'Login expirado, efetue o login novamente!'
      }else{
        this.msgInfo = error.json().message;
      }
      this.showConfirmModal = true;
     }
   );

  }

  limpaCampos(){
    this.formOuvidoria.get('ouvidoriaTipo').get('descricao').setValue("");
    this.formOuvidoria.get('ouvidoriaTipo').get('id').setValue("");
    this.formOuvidoria.get('assunto').setValue("");
    this.formOuvidoria.get('descricao').setValue("");
    this.formOuvidoria.markAsUntouched();
  }
}
