import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { HomeUtils } from '../../utils/home-utils';
import { ContrachequeService } from '../../services/contracheque/contracheque.service';
import { Contracheque } from '../../models/contracheque';
import { VinculoModel } from '../../models/vinculo-model';
import { User } from './../../models/user';
import { UserService } from '../../services/user.service';
import { Periodo } from '../../models/periodo';

@Component({
  selector: 'app-contracheque',
  templateUrl: './contracheque.component.html',
  styleUrls: ['./contracheque.component.css'],
  animations:[
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(-100%)' }),
        animate(300)
      ])
    ])
  ]
})
export class ContrachequeComponent implements OnInit, OnChanges, AfterViewInit {

  title: string = "contracheque";
  vinculo: any = [];
  private user: User;
  private contracheques: Contracheque[];
  private vinculos: VinculoModel[];
  private periodos: Periodo[];
  showLoader: boolean = true;
  showModal: boolean = false;
  fileUrl;

  constructor(private utils: HomeUtils, private contrachequeService: ContrachequeService, 
    private userService: UserService, private router: Router, private sanitizer: DomSanitizer) { }

  deactivate(vinculo) {

    this.vinculo = vinculo;
    this.vinculos.forEach(v => v.activate = false);

  }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => this.user = user);
    this.initContracheque();
    this.utils.contracheque();
   }
  
  ngOnChanges() { }

  ngAfterViewInit(){this.utils.contracheque();}

  initContracheque(): void {
    this.contrachequeService.consultarVinculos().subscribe(v => {
      this.vinculos = v.json() as Array<VinculoModel>;
      this.vinculos.forEach(v => v.activate = false);
      this.vinculos[0].activate = true;
      this.contrachequeService.gerarContracheque().subscribe(c => {
        try {

          this.contracheques = c.json().financeiro as Contracheque[];
        } catch(e){
          this.showLoader = false;
          this.showModal = true;
          return;
        }
        this.contracheques.forEach(c => c.activate = false);
        this.contracheques[0].activate = true;
        this.utils.contracheque();
        this.vinculos.forEach(v => {
          this.contrachequeService.consultarPeriodos(v.idVinculo).subscribe(p => {
            this.showLoader = false;
            this.periodos = p.json() as Periodo[];
            this.periodos.forEach(p => p.activate = false);
            this.periodos[0].activate = true;
            if(v.activate === true){
              this.vinculo = v;
            }
            v.periodos = [];
            v.contracheques = [];
            this.contracheques.forEach(c => {
              if(v.idVinculo.trim() === c.id_vinculo.trim()){
                v.contracheques.push(c);
              }
            });
            this.periodos.forEach((p, i:number = 0) => {
              if(v.idVinculo.trim() === p.idVinculo.trim()){
                v.periodos.push(p);
                if(i === 0){
                  p.activate = true;
                }
                else {
                  p.activate = false;
                }
              }
              i++;
            });
          }, () => this.showLoader = false);
        });
      }, () => this.showLoader = false);
    },
    error=> {
      this.showLoader = false;
      if (error._body === "O cpf informado não possui processos abertos e/ou fechados!") {
      } else if (error.json().message.trim() === "Invalid Token") {
        this.userService.logoffUser();
        this.router.navigate(['/']);
      }
    });
  }
}