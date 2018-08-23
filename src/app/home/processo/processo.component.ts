import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations'

import { DocumentoProcesso } from './../../models/documento-processo';
import { UserService } from './../../services/user.service';
import { ProcessoService } from './../../services/processos/processo.service';
import { HomeUtils } from '../../utils/home-utils';
import { Processo } from '../../models/processo';
import { User } from '../../models/user';
import { Tramitacao } from '../../models/tramitacao';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class ProcessoComponent implements OnInit {

  title: string = "processos";
  showLoader: boolean = true;
  page: number = 1;
  pageDoc: number = 1;
  user: User;
  processos: any[];
  resumoProcesso: Processo = null;
  tramitacoes: Tramitacao[];
  documentos: DocumentoProcesso[];
  url_docs: string = "file:///\\\\10.10.1.6/digitalizados/541811/";

  constructor(private utils: HomeUtils, private processoService: ProcessoService, private userService: UserService, private router: Router) { }
  
  ngOnInit() {
    
    this.utils.processos();
    this.userService.getLoggedUser().subscribe(user => {
      this.user = user;
    });
    this.processoService.getProcessos(this.user.user_cpf).subscribe(
      data => {
        this.showLoader = false;
        this.processos = data.json();
      },
      error=> {
        if (JSON.parse(error._body).message.trim() === "Invalid Token"){
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    );

  }

  selectedProcesso(event) {

    this.resumoProcesso = this.processos[event.target.selectedIndex - 1].resumoProcesso as Processo;
    this.documentos = this.processos[event.target.selectedIndex - 1].documentoProcesso as DocumentoProcesso[];
    this.tramitacoes = this.processos[event.target.selectedIndex - 1].tramitacaoProcesso as Tramitacao[];
    this.tramitacoes.sort((a, b) => a.dataTramitacao > b.dataTramitacao ? -1 : 1);
  }

}