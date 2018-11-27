export class Orgao {
    private idOrgao: number;    
    private descricao: string;
    private codigo: number;

    constructor(idOrgao: number, descricao: string, codigo: number){
        this.idOrgao = idOrgao;
        this.descricao = descricao;
        this.codigo = codigo;
    }
}