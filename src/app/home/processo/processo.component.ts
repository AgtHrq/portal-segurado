import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/user.service';
import { ProcessoService } from './../../services/processos/processo.service';
import { HomeUtils } from '../../utils/home-utils';
import { Processo } from '../../models/processo';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  title: string = "processos"
  processos: any[];
  numProcesso: string;
  dataRequerimento: Date;
  assuntoProcesso: string;
  dataPublicacao: string;
  numeroPortaria: number;
  dataAgendamento: Date;
  turnoAgendamento: string;
  cpf: string;
  matricula: string;
  nome: string;
  dataTramitacao: Date;
  setorTramitacao: string;
  despachoTramitacao: string;

  constructor(private utils: HomeUtils, private processoService: ProcessoService, private userService: UserService) { }

  ngOnInit() {

  this.utils.processos();
  this.processoService.getProcessos(this.userService.getLoggedUser().user_cpf).subscribe(
    data => this.processos = data.json(),
    error=> console.log(error._body)
  );

  }

  selectedProcesso(event) {

    this.numProcesso = event.target.value;
    this.dataRequerimento = this.processos[event.target.selectedIndex - 1].resumoProcesso.dataRequerimento;
    this.assuntoProcesso = this.processos[event.target.selectedIndex - 1].resumoProcesso.assuntoProcesso;
    this.dataPublicacao = this.processos[event.target.selectedIndex - 1].resumoProcesso.dataPublicacao;
    this.numeroPortaria = this.processos[event.target.selectedIndex - 1].resumoProcesso.numeroPortaria;
    this.dataAgendamento = this.processos[event.target.selectedIndex - 1].resumoProcesso.dataAgendamento;
    this.matricula = this.processos[event.target.selectedIndex - 1].resumoProcesso.matricula;
    this.turnoAgendamento = this.processos[event.target.selectedIndex - 1].resumoProcesso.turnoAgendamento;
    this.nome = this.processos[event.target.selectedIndex - 1].resumoProcesso.nome;
    this.cpf = this.processos[event.target.selectedIndex - 1].resumoProcesso.cpf;

  }

}
