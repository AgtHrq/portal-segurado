import { User } from './user';
import { TipoSolicitacao } from './tipo-solicitacao';

export interface Solicitacao {

    id: number;
    status: boolean;
    dataCriacao: Date;
    dataEncerramento: Date;
    descricao: string;
    resposta: string;
    tipoSolicitacao: TipoSolicitacao;
    idUsuario: any
    showTd: string;
    showDetail: string;

}