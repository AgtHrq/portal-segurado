export class Usuario {
    
    constructor(private _id: number, private _cpf: string, private _email: string, private _nome: string, private _role: string){

    }

    public get id() {

        return this._id;
    }

    public get cpf(){

        return this._cpf;
    }

    public get email(){

        return this.email;
    }

    public get nome(){

        return this.nome;
    }

    public get role(){

        return this._role;
    }

}
