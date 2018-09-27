import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { HomeUtils } from '../../utils/home-utils';
import { ContrachequeService } from '../../services/contracheque/contracheque.service';
import { Contracheque } from '../../models/contracheque';
import { Vinculo } from '../../models/vinculo';
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
  private vinculos: Vinculo[];
  private periodos: Periodo[];
  showLoader: boolean = true;

  constructor(private utils: HomeUtils, private contrachequeService: ContrachequeService, private userService: UserService) { }

  deactivate(vinculo) {

    this.vinculo = vinculo;

  }

  ngOnInit() {

    this.userService.getLoggedUser().subscribe(user => this.user = user);
    this.getVinculos();
    this.getContracheques();
    this.utils.contracheque();
   }
  
  ngOnChanges() {
   }

  ngAfterViewInit(){this.utils.contracheque();}

  getContracheques(): any {
     this.contrachequeService.gerarContracheque().subscribe(c => {
       console.log(c.json());
    })
    // return null;
  }

  getPeriodos(idVinculo: string): Periodo[] {
    this.contrachequeService.consultarPeriodos(idVinculo).subscribe(p => {
      return p.json() as Periodo[];
    });
    return null;
  }

  getVinculos(): void{
    this.contrachequeService.consultarVinculos().subscribe(v => {
      this.vinculos = v.json() as Array<Vinculo>;
      this.vinculos.forEach(v => v.activate = false);
      this.vinculos[0].activate = true;
      this.contrachequeService.gerarContracheque().subscribe(c => {
        this.contracheques = c.json().financeiro as Contracheque[];
        this.contracheques.forEach(c => c.activate = false);
        this.contracheques[0].activate = true;
        this.utils.contracheque();
        this.vinculos.forEach(v => {
          this.contrachequeService.consultarPeriodos(v.idVinculo).subscribe(p => {
            this.showLoader = false;
            this.periodos = p.json() as Periodo[];
            this.periodos.forEach(p => p.activate = false);
            this.periodos[0].activate = true;
            this.vinculo = this.vinculos[0];
            this.vinculos.forEach(v => {
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
            });
          });
        });
      });
    });
  }
}
