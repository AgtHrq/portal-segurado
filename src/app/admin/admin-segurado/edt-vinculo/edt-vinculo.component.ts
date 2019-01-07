import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { EdtVinculoService } from './edt-vinculo.service';

@Component({
  selector: 'app-edt-vinculo',
  templateUrl: './edt-vinculo.component.html',
  styleUrls: ['./edt-vinculo.component.css']
})
export class EdtVinculoComponent implements OnInit {

  segForm: FormGroup;
  vincForm: FormGroup;
  items: FormArray;
  cpf: string;
  vinculos: any;
  orgaos: any[];
  cargos: any[];

  constructor(private edtService: EdtVinculoService, private fb: FormBuilder) { }

  ngOnInit() {

    this.edtService.getOrgaos().subscribe(orgaos => this.orgaos.push(orgaos.json()));
    this.edtService.getCargos().subscribe(cargos => this.cargos.push(cargos.json()));

    this.segForm = new FormGroup({
      'cpf': new FormControl('', [
        Validators.required,
        Validators.minLength(14)
      ])
    });

    this.vincForm = new FormGroup({
      items: this.fb.array([this.createItem()])
    });
  }

  consultaVinculos(cpf: string){

    this.edtService.getVinculos(cpf.replace(/\.|\-/g, '')).subscribe(vinculos => {

      this.vinculos = vinculos.json();
      if(this.vinculos.length > 1){

        for (let i = 0; i < this.vinculos.length - 1; i++) {
          
          this.edtService.getOrgaos().subscribe(orgaos => this.orgaos.push(orgaos.json()));
          this.edtService.getCargos().subscribe(cargos => this.cargos.push(cargos.json()));
          this.addItem();
        }
      }
      this.vinculos.forEach((vinc, index) => {
        this.items = this.vincForm.get('items') as FormArray;
        this.items.controls[index].get('cpf').setValue(vinc.cpf);
        this.items.controls[index].get('id').setValue(vinc.id);
        this.items.controls[index].get('matricula').setValue(vinc.matricula);
        this.items.controls[index].get('idOrgao').get('id').setValue(vinc.idOrgao.id);
        this.items.controls[index].get('idOrgao').get('codigo').setValue(vinc.idOrgao.codigo);
        this.items.controls[index].get('idOrgao').get('descricao').setValue(vinc.idOrgao.descricao);
        this.items.controls[index].get('idCargo').get('id').setValue(vinc.idCargo.id);
        this.items.controls[index].get('idCargo').get('codigo').setValue(vinc.idCargo.codigo);
        this.items.controls[index].get('idCargo').get('descricao').setValue(vinc.idCargo.descricao);
        this.items.controls[index].get('idTipoVinculo').get('id').setValue(vinc.idTipoVinculo.id);
        this.items.controls[index].get('idTipoVinculo').get('descricao').setValue(vinc.idTipoVinculo.descricao);
      });
    });
  }

  selectOrgao(idOrgao: number){

    this.cargos = null;
    this.edtService.getCargosFilter(idOrgao).subscribe(cargos => this.cargos = cargos.json());
  }

  createItem(): FormGroup{ 

    return this.fb.group({
      'cpf': new FormControl('', [ Validators.required ]),
      'id': new FormControl('', [ Validators.required ]),
      'idOrgao': new FormGroup({
        'id': new FormControl('', [ Validators.required ]),
        'codigo': new FormControl('', [ Validators.required ]),
        'descricao': new FormControl('', [ Validators.required ])
      }),
      'idCargo': new FormGroup({
        'id': new FormControl('', [ Validators.required ]),
        'codigo': new FormControl('', [ Validators.required ]),
        'descricao': new FormControl('', [ Validators.required ])
      }),
      'idTipoVinculo': new FormGroup({
        'id': new FormControl('', [ Validators.required ]),
        'descricao': new FormControl('', [ Validators.required ])
      }),
      'matricula': new FormControl('', [ Validators.required ])
    });
  }

  addItem(){

    this.items = this.vincForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
