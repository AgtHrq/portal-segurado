import { Component, OnInit } from '@angular/core';
import { GetAllOuvidoriaRespondidaService } from 'src/app/services/get-all-ouvidoria-respondida/get-all-ouvidoria-respondida.service';
import { Ouvidoria } from 'src/app/models/ouvidoria';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-ouvidoria-respondida',
  templateUrl: './listar-ouvidoria-respondida.component.html',
  styleUrls: ['./listar-ouvidoria-respondida.component.css']
})
export class ListarOuvidoriaRespondidaComponent implements OnInit {

  ouvidorias: Ouvidoria[];
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';

  constructor(private getAllOuvidoriaRespondida: GetAllOuvidoriaRespondidaService, private  router: Router, private userService: UserService) { }

  ngOnInit() {

    this.getAllOuvidoriaRespondida.getOuvidoriaRespondida().subscribe(
      ouvidoria => {
        this.ouvidorias = ouvidoria.json() as Ouvidoria[];
        console.log(this.ouvidorias);
        this.ouvidorias.forEach(
          o => {
            o.showTd = "show";
            o.showDetail = "hidden";
          }
        );
      },
      error => {
        console.log("oi");
        if(error._body === 'Não existem processos de ouvidoria respondidos!'){
          this.msgInfo = error._body;
        }else {
          this.msgInfo = error.json().message;
        }

        this.showConfirmModal = true;
      }
    );

  }

  buttonModal(msg: string){
    if(msg === 'Login expirado, efetue o login novamente!'){
      this.userService.logoffUser();
      this.router.navigate(['/']);
    }else{
      this.showConfirmModal = false;
    }
  }

  toggleState(ouvidoria: Ouvidoria) {

    if (ouvidoria.showDetail === 'hidden'){
      ouvidoria.showDetail = 'show';
      ouvidoria.showTd = 'hidden';
    } else {
      ouvidoria.showDetail = 'hidden';
      ouvidoria.showTd = 'show';
    }

  }

}
