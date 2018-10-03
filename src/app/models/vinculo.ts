import { Orgao } from "./orgao";

export class Vinculo {
    private idOrgao: Orgao;
    private matricula: any;
    private cpf: any;

    constructor(idOrgao: Orgao, matricula: any, cpf: any){
        this.cpf = cpf;
        this.idOrgao = idOrgao;
        this.matricula = matricula;
    }

}
