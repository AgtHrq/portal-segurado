import { Contracheque } from "./contracheque";

export class Periodo {

    private _mesReferencia: number;
    private _anoReferencia: number;
    private _anomes: string;
    private _idVinculo: string;
	private _activate: boolean;
	private _contracheque: Contracheque[];

    constructor (){

        this.activate = false;

    }

	public get mesReferencia(): number {
		return this._mesReferencia;
	}

	public get anoReferencia(): number {
		return this._anoReferencia;
	}

	public get anomes(): string {
		return this._anomes;
	}

	public get idVinculo(): string {
		return this._idVinculo;
	}

	public get activate(): boolean {
		return this._activate;
	}

	public set mesReferencia(value: number) {
		this._mesReferencia = value;
	}

	public set anoReferencia(value: number) {
		this._anoReferencia = value;
	}

	public set anomes(value: string) {
		this._anomes = value;
	}

	public set idVinculo(value: string) {
		this._idVinculo = value;
	}

	public set activate(value: boolean) {
		this._activate = value;
	}

	public get contracheque(): Contracheque[] {
		return this._contracheque;
	}
	
	public set contracheque(value: Contracheque[]) {
		this._contracheque = value;
	}

}
