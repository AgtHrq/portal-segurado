import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalIdAdminService { // SERVICE PARA UTILIZAR O LOCAL STORAGE E GUARDAR ID DO ADMIN QUE ACESSOU PERFIL DO SEGURADO

  constructor() { }
  
    getId(){
  
      return localStorage.getItem("idAdmin");
  
    }
  
    setId(idAdmin: string){
  
      localStorage.setItem("idAdmin", idAdmin);
  
    }
  
    deleteId(){
  
      localStorage.removeItem("idAdmin");
  
    }
  
  
  
}
