import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { ProcessoService } from './../../services/processos/processo.service';
import { HomeUtils } from '../../utils/home-utils';
import { Processo } from '../../models/processo';
import { User } from '../../models/user';
import { Tramitacao } from '../../models/tramitacao';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  title: string = "processos";
  page: number = 1;
  user: User;
  processos: any[];
  resumoProcesso: Processo = null;
  tramitacoes: Tramitacao[];

  constructor(private utils: HomeUtils, private processoService: ProcessoService, private userService: UserService) {
    
    this.userService.getLoggedUser().subscribe(user => this.user = user);

   }

  ngOnInit() {

  this.utils.processos();
  this.processoService.getProcessos(this.user.user_cpf).subscribe(
    data => {
      this.processos = data.json();
    },
    error=> console.log(error._body)
  );

  }

  selectedProcesso(event) {

    this.resumoProcesso = this.processos[event.target.selectedIndex - 1].resumoProcesso as Processo;
    this.tramitacoes = this.processos[event.target.selectedIndex - 1].tramitacaoProcesso as Tramitacao[];
    this.tramitacoes.sort((a, b) => a.dataTramitacao > b.dataTramitacao ? -1 : 1);
    console.log(this.processos);

  }

}
