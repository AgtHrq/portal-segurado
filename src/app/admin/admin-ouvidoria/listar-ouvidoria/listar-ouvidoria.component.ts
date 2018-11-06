import { Component, OnInit } from '@angular/core';
import { Ouvidoria } from 'src/app/models/ouvidoria';
import { GetAllOuvidoriaAtivaService } from 'src/app/services/get-all-ouvidoria-ativa/get-all-ouvidoria-ativa.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-ouvidoria',
  templateUrl: './listar-ouvidoria.component.html',
  styleUrls: ['./listar-ouvidoria.component.css']
})
export class ListarOuvidoriaComponent implements OnInit {

  listarOuvidoria: Ouvidoria[] = [];
  ouvidoria:Ouvidoria = null;
  showModal:boolean = false;
  showConfirmModal: boolean = false;
  showSucess: boolean = false;
  msgInfo: string = '';
  
  constructor(private getAllOuvidoriaAtiva: GetAllOuvidoriaAtivaService, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.getAllOuvidoriaAtiva.getOuvidoriasAtiva().subscribe(
      ouvidorias => {
        this.listarOuvidoria = ouvidorias.json();
        console.log(this.listarOuvidoria);
      },
      error => {
        if(error._body === 'Não existem processos de ouvidoria abertos!'){
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

  responderOuvidoria(ouvidoria: Ouvidoria){
    this.showModal = true;
    this.ouvidoria = ouvidoria;
    console.log(ouvidoria);
  }

}
