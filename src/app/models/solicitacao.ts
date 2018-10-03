import { TipoSolicitacao } from './tipo-solicitacao';

export interface Solicitacao {

    id: number;
    status: boolean;
    dataCriacao: Date;
    dataEncerramento: Date;
    descricao: string;
    resposta: string;
    tipoSolicitacao: TipoSolicitacao;
    showTd: string;
    showDetail: string;

}