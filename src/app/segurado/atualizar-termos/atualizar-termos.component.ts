import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { Cadastrar2Service } from './../../services/cadastrar2/cadastrar2.service';
import { finalize } from 'rxjs/operators';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-atualizar-termos',
  templateUrl: './atualizar-termos.component.html',
  styleUrls: ['./atualizar-termos.component.css']
})
export class AtualizarTermosComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Output() cancel = new EventEmitter<boolean>();
  @Output() success = new EventEmitter<boolean>();
  showLoader: boolean = false;
  formConfirm: FormGroup;
  reponse: boolean = false;

  constructor(private attService: UserService, private fb: FormBuilder, private cadastraService2: Cadastrar2Service) { }

  ngOnInit() {

    this.formConfirm = this.fb.group({

      cpf: ['', Validators.required],
      accepted: ['', Validators.requiredTrue] 
    });
  }

  cancelar(){

    this.formConfirm.get('cpf').setValue('');
    this.formConfirm.get('accepted').setValue('');
    this.cancel.emit(false);
  }

  confirmar(){
    
    this.showLoader = true;
    this.attService.aceitaTermos(this.formConfirm.value).pipe(
      finalize(() => {
        
        this.showLoader = false;
        this.success.emit(this.reponse);
      })
    ).subscribe(() => this.reponse = true);
  }

  getTermo(){

    this.cadastraService2.getTermo().subscribe(doc => {
      let docTermo = new Blob([doc.blob()], { type: 'application/pdf' });
      saveAs(docTermo, 'termo_uso.pdf');
    });
  }

}
