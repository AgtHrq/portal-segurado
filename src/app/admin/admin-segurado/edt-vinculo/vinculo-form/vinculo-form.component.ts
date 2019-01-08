import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EdtVinculoService } from '../edt-vinculo.service';

@Component({
  selector: 'app-vinculo-form',
  templateUrl: './vinculo-form.component.html',
  styleUrls: ['./vinculo-form.component.css']
})
export class VinculoFormComponent implements OnInit, OnChanges {
  
  orgaos = [];
  cargos = [];
  tipoVinculos = [];
  @Input() vinculo: any;
  vinculoForm: FormGroup;

  constructor(private edtService: EdtVinculoService, private fb: FormBuilder) { }

  ngOnInit() {

    this.edtService.getOrgaos().subscribe(orgaos => this.orgaos = orgaos.json());
    this.edtService.getCargos().subscribe(cargos => this.cargos = cargos.json());
  }

  ngOnChanges(){

    this.vinculoForm = this.fb.group({

      'cpf': [ this.vinculo.cpf, Validators.required ],
      'idOrgao': this.fb.group({
        'id': [ this.vinculo.idOrgao.id ],
        'descricao': [ this.vinculo.idOrgao.descricao ],
        'codigo': [ this.vinculo.idOrgao.codigo ]
      }),
      'idCargo': this.fb.group({
        'id': [ this.vinculo.idCargo.id ],
        'descricao': [ this.vinculo.idCargo.descricao ],
        'codigo': [ this.vinculo.idCargo.codigo ]
      }),
      'idTipoVinculo': this.fb.group({
        'id': [ this.vinculo.idTipoVinculo.id ],
        'descricao': [ this.vinculo.idTipoVinculo.descricao ],
      }),
      'matricula': [ this.vinculo.matricula, Validators.required ]
    });
  }

}
