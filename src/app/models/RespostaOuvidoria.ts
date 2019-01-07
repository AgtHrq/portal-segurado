import { TipoSolicitacao } from "./tipo-solicitacao";

export interface RespostaOuvidoria {

    id: number;
    assunto: string;
    dataCriacao: Date;
    descricao: string;
    ouvidoriaTipo: TipoSolicitacao; //usando a mesma interface de tipoSolicitação
    resposta: string;
    status: boolean;
    showTd: string;
    showDetail: string;
}