import { TipoSolicitacao } from './tipo-solicitacao';

export interface Solicitacao {

    status: boolean;
    dataCriacao: Date;
    dataEncerramento: Date;
    descricao: string;
    resposta: string;
    tipoSolicitacao: TipoSolicitacao;
    showTd: string;
    showDetail: string;

}