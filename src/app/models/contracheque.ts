export class Contracheque {

    private _descricao: string;
    private _codigo_evento: number;
    private _envento: string;
    private _prazo: number;
    private _valor: number;
    private _mes_referencia: number;
    private _ano_referencia: number;
	private _activate: boolean;
	private _id_vinculo: string;

    constructor() {

        this.activate = false;
        
    }

	public get descricao(): string {
		return this._descricao;
	}

	public get codigo_evento(): number {
		return this._codigo_evento;
	}

	public get envento(): string {
		return this._envento;
	}

	public get prazo(): number {
		return this._prazo;
	}

	public get valor(): number {
		return this._valor;
	}

	public get mes_referencia(): number {
		return this._mes_referencia;
	}

    public get ano_referencia(): number {
		return this._ano_referencia;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

	public set codigo_evento(value: number) {
		this._codigo_evento = value;
	}

	public set envento(value: string) {
		this._envento = value;
	}

	public set prazo(value: number) {
		this._prazo = value;
	}

	public set valor(value: number) {
		this._valor = value;
	}

	public set mes_referencia(value: number) {
		this._mes_referencia = value;
	}

	public set ano_referencia(value: number) {
		this._ano_referencia = value;
	}

	public get activate(): boolean {
		return this._activate;
	}

	public set activate(value: boolean) {
		this._activate = value;
	}

	public get id_vinculo(): string {
		return this._id_vinculo;
	}

	public set id_vinculo(value: string) {
		this._id_vinculo = value;
	}
    

}
