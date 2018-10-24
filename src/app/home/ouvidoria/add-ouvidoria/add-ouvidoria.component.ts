import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormGroup, FormBuilder, Validators } from '../../../../../node_modules/@angular/forms';
import { AddOuvidoriaService } from '../../../services/add-ouvidoria/add-ouvidoria.service';
import { UserService } from '../../../services/user.service';
import { TipoOuvidoriaService } from '../../../services/tipo-ouvidoria/tipo-ouvidoria.service';
import { User } from '../../../models/user';

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
  constructor(private formBuilder: FormBuilder, private addOuvidoriaService: AddOuvidoriaService,
    private userService: UserService, private tipoOuvidoriaService: TipoOuvidoriaService) {  }
  
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
        console.log("Tipos: " , this.tiposOuvidoria);
      }

    );
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
    console.log(ouvidoria);

   this.addOuvidoriaService.sendBackOuvidoria(ouvidoria).subscribe(
     respOuvidoria => {
       console.log("respOuvidoria " + respOuvidoria);
       alert("Ouvidoria enviada com Sucesso")
       this.limpaCampos();
     },
     error => {
       alert(error._body);
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
