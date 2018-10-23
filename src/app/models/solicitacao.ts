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
    idUsuario: User
    showTd: string;
    showDetail: string;

}