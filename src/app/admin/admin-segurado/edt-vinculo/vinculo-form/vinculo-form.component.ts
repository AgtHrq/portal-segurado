import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MaskUtils } from './../../../../utils/mask-utils';
import { EdtVinculoService } from '../edt-vinculo.service';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-vinculo-form',
  templateUrl: './vinculo-form.component.html',
  styleUrls: ['./vinculo-form.component.css']
})
export class VinculoFormComponent implements OnInit, OnChanges, AfterViewInit {
  
  orgaos = [];
  cargos = [];
  tipoVinculos = [];
  @Input() vinculo: any;
  vinculoForm: FormGroup;
  showConfirmModal: boolean = false;
  showLoader: boolean = false;
  message: string;
  messageError: string;

  constructor(private edtService: EdtVinculoService, private fb: FormBuilder, private maskUtils: MaskUtils, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.edtService.getOrgaos().subscribe(orgaos => this.orgaos = orgaos.json());
  }

  ngAfterViewInit(){

    this.maskUtils.matriculaMask('matricula');
  }

  ngOnChanges(){

    this.vinculoForm = this.fb.group({

      'cpf': [ this.vinculo.cpf, Validators.required ],
      'idOrgao': this.fb.group({
        'idOrgao': [ this.vinculo.idOrgao.id, Validators.required ],
        'descricao': [ this.vinculo.idOrgao.descricao ],
        'codigo': [ this.vinculo.idOrgao.codigo ]
      }),
      'idCargo': this.fb.group({
        'idCargo': [ '', Validators.required ],
        'descricao': [ this.vinculo.idCargo.descricao ],
        'codigo': [ this.vinculo.idCargo.codigo ]
      }),
      'idTipoVinculo': this.fb.group({
        'id': [ this.vinculo.idTipoVinculo.id ],
        'descricao': [ this.vinculo.idTipoVinculo.descricao ],
      }),
      'matricula': [ this.vinculo.matricula, Validators.compose([ Validators.required, Validators.minLength(9), Validators.maxLength(9) ]) ],
      'matriculaAnt': [ this.unmask(this.vinculo.matricula), Validators.required ]
    });

    this.edtService.getCargosFilter(this.vinculo.idOrgao.id).subscribe(cargos => {

      this.cargos = null;
      this.cargos = cargos.json();
      this.setCargo();
    });
  }

  recarregaCargos(id){

    this.edtService.getCargosFilter(id).subscribe(cargos => {

      this.cargos = null;
      this.cargos = cargos.json();
    });
    this.vinculoForm.get('idCargo').get('idCargo').setValue('');
  }

  sendDados(dados){

    this.showLoader = true;
    dados.cpf = this.unmask(dados.cpf);
    dados.matricula = this.unmask(dados.matricula);
    this.edtService.alterVinculo(dados).pipe(
      finalize(() => this.showLoader = false)
    ).subscribe((r: any) => {
      this.showConfirmModal = false;
      this.message = r._body;
      this.messageError = '';
    },
    error => {
      if (error._body === 'Ocorreu um erro durante a alteração do vinculo.') {
        this.messageError = error._body;
        this.message = '';
      } else if (error.json().message.trim() === 'Invalid Token') {
        this.userService.logoffUser();
        this.router.navigate(['/']);
      }
    });
  }

  setCargo(){

    this.vinculoForm.get('idCargo').get('idCargo').setValue(this.vinculo.idCargo.id);
  }

  unmask(field: string): string {

    return field.replace(/\.|\-/g, '');
  }
}