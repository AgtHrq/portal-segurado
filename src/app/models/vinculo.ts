import { Contracheque } from "./contracheque";
import { Periodo } from "./periodo";

export class Vinculo {

    private _orgao: string;
    private _cargo: string;
    private _idVinculo: string;
    private _tipoVinculo: string;
	private _activate: boolean = false;
	private _contracheques: Contracheque[];
	private _periodos: Periodo[];

    constructor(){

        this.activate = false;

    }

	public get orgao(): string {
		return this._orgao;
	}

	public get cargo(): string {
		return this._cargo;
    }
    
	public get idVinculo(): string {
		return this._idVinculo;
	}

	public get tipoVinculo(): string {
		return this._tipoVinculo;
	}

	public get activate(): boolean {
		return this._activate;
	}

	public set orgao(value: string) {
		this._orgao = value;
	}

	public set cargo(value: string) {
		this._cargo = value;
	}

	public set idVinculo(value: string) {
		this._idVinculo = value;
	}

	public set tipoVinculo(value: string) {
		this._tipoVinculo = value;
    }
    
	public set activate(value: boolean) {
		this._activate = value;
	}

	public get contracheques(): Contracheque[] {
		return this._contracheques;
	}

	public set contracheques(value: Contracheque[]) {
		this._contracheques = value;
	}
    
	public get periodos(): Periodo[] {
		return this._periodos;
	}

	public set periodos(value: Periodo[]) {
		this._periodos = value;
	}


}
