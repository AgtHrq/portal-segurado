import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { finalize } from 'rxjs/operators'
import { Router } from '@angular/router';
import { InfoUsuarioService } from './info-usuario.service';
import { ListaUsuariosService } from 'src/app/services/listaUsuarios/lista-usuarios.service';
import { User } from 'src/app/models/user';



@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  @Input() user: any;
  @Output() toggle = new EventEmitter<boolean>();
  cpf: string;
  vinculos: any;
  selectedVinculo: any;
  showLoader: boolean = false;
  showMessage: boolean = false;
  erroMessage: string = 'CPF não encontrado';

  constructor(private edtService: InfoUsuarioService, private fb: FormBuilder, private userService: UserService, private router: Router) { }

  toggleState() {
    this.toggle.emit(false);
  }

  consultaVinculos(cpf: string){

    this.showMessage = false;
    this.showLoader = true;
    this.edtService.getVinculos(cpf.replace(/\.|\-/g, ''))
      .pipe(
        finalize(() => this.showLoader = false)
      )
      .subscribe(vinculos => {
    
      this.vinculos = vinculos.json() as any[];
      this.vinculos.forEach(vinculo => {
        
        vinculo.active = false;
        vinculo.cpf = this.maksCpf(vinculo.cpf);
        vinculo.matricula = this.maskMatricula(vinculo.matricula);
      });
      
      this.vinculos[0].active = true;
      this.selectedVinculo = this.vinculos[0];
    },
      error=> {
        console.log(error);
        
        if (error/*error._body === "O cpf informado não possui processos abertos e/ou fechados!"*/) {
          console.log("entrou em consultar vinculo");
        
        this.showLoader = false;
        this.erroMessage = error._body;
        this.showMessage = true;
        
          // this.showLoader = false;
        } else if (error.json().message.trim() === "Invalid Token") {
          this.userService.logoffUser();
          this.router.navigate(['/']);
        }
      }
    );
  }

  deactive() {
    
    this.vinculos.forEach(vinculo => {
      
      vinculo.active = false;
    });
  }

  maksCpf(cpf: string): string{

    return `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9)}`;
  }

  maskMatricula(matricula: string): string{

    return `${matricula.substr(0, 3)}.${matricula.substr(3, 3)}-${matricula.substr(6)}`;
  }

  ngOnInit() {
    this.consultaVinculos(this.user.cpf);
  }



}
