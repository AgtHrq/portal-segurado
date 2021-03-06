import { Routes, RouterModule } from '@angular/router';

//AdminComponents
import { AdminDirfComponent } from './admin/admin-dirf/admin-dirf.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CadastroUsuarioComponent } from './admin/admin-home/cadastro-usuario/cadastro-usuario.component';
import { AdminSolicitacaoComponent } from './admin/admin-solicitacao/admin-solicitacao.component';
import { AdminNotificacaoComponent } from './admin/admin-notificacao/admin-notificacao.component';
import { CadastroNotificacaoComponent } from './admin/admin-notificacao/cadastro-notificacao/cadastro-notificacao.component';
import { ExcluirNotificacaoComponent } from './admin/admin-notificacao/excluir-notificacao/excluir-notificacao.component';
import { AlterardadosUsuarioComponent } from './admin/admin-home/alterardados-usuario/alterardados-usuario.component';
import { ListaUsuariosComponent } from './admin/admin-home/lista-usuarios/lista-usuarios.component';
import { ListarSolicitacaoComponent } from './admin/admin-solicitacao/listar-solicitacao/listar-solicitacao.component';
import { ListaSolicitacaoFechedaComponent } from './admin/admin-solicitacao/lista-solicitacao-fecheda/lista-solicitacao-fecheda.component';
import { AdminUploadComponent } from './admin/admin-upload/admin-upload.component';
import { UploadComponent } from './admin/admin-upload/upload/upload.component';
import { ListaDocsComponent } from './admin/admin-upload/lista-docs/lista-docs.component';
import { AdminSeguradoComponent } from './admin/admin-segurado/admin-segurado.component';
import { UploadDirfComponent } from './admin/admin-dirf/upload-dirf/upload-dirf.component';
import { EdtVinculoComponent } from './admin/admin-segurado/edt-vinculo/edt-vinculo.component';
import { UploadDadosComponent} from './admin/admin-carregar-dados/upload-dados/upload-dados.component';
import { UploadDados2Component } from './admin/admin-carregar-dados/upload-dados2/upload-dados2.component';

//HomeComponents
import { SolicitacaoComponent } from './home/solicitacao/solicitacao.component';
import { ProcessoComponent } from './home/processo/processo.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { FichaFinanceiraComponent } from './home/ficha-financeira/ficha-financeira.component';
import { VizualizaFichaComponent } from './home/ficha-financeira/vizualiza-ficha/vizualiza-ficha.component';
import { ContrachequeComponent } from './home/contracheque/contracheque.component';
import { ImprimirFichaComponent } from './home/ficha-financeira/imprimir-ficha/imprimir-ficha.component';
import { DirfComponent } from './home/dirf/dirf.component';

//SeguradoComponents
import { ValidarPdfComponent } from './segurado/validar-pdf/validar-pdf.component';
import { LoginComponent } from './segurado/login/login.component';
import { CadastroComponent } from './segurado/cadastro/cadastro.component';
import { ForgotPasswordComponent } from './segurado/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './segurado/forgot-password/change-password/change-password.component';

//Services
import { AdminGuard } from './services/guards/admin.guard';
import { AuthGuard } from './services/guards/auth.guard';
import { SuperAdminGuard } from './services/guards/super-admin.guard';
import { AdminCarregarDadosComponent } from './admin/admin-carregar-dados/admin-carregar-dados.component';


const APP_ROUTES: Routes = [

    { 
        path: '', component: LoginComponent 
    },
    {
        path: 'cadastro', component: CadastroComponent 
    },
    {
        path: 'validar/:token', component:  ValidarPdfComponent
    },
    {
        path: 'validar', component:  ValidarPdfComponent
    },
    { 
        path: 'esqueci/senha', component: ForgotPasswordComponent 
    },
    {
        path: 'changePassword/:hashBack', component: ChangePasswordComponent
    },
    { 
        path: 'home/segurado', component: HomeComponent, canActivate: [AuthGuard], children: [
            { 
                path: '', component: WelcomeComponent
            },
            {
                path: 'processos', component: ProcessoComponent
            },
            {
                path: 'ficha-financeira', component: FichaFinanceiraComponent, children: [
                    {
                        path: 'visualizar/ficha', component: VizualizaFichaComponent
                    },
                    {
                        path: 'imprimir/ficha', component: ImprimirFichaComponent
                    }
                ]
            },
            {
                path: 'solicitacoes', component: SolicitacaoComponent
            },
            {
                path: 'contracheque', component: ContrachequeComponent
            },
            {
                path: 'dirf', component: DirfComponent
            },
            {
                path: '**', redirectTo: ''
            }
        ]
    },
    {
        path: 'admin', component: AdminComponent, canActivate: [AdminGuard], children:
        [
            { 
                path: '', component: AdminHomeComponent, children: 
                [
                    { 
                        path: "usuarios/cadastro", component: CadastroUsuarioComponent, canActivate: [SuperAdminGuard]
                    },
                    {
                        path: "usuarios/alterardados", component: AlterardadosUsuarioComponent
                    },
                    {
                        path: "usuarios/lista", component: ListaUsuariosComponent
                    }
                ]
            },
            {
                path: "notificacao", component: AdminNotificacaoComponent, children:
                [   
                    {
                        path: "cadastrar", component: CadastroNotificacaoComponent
                    },
                    {
                        path: "excluir", component: ExcluirNotificacaoComponent
                    },
                ]
            },
            {
                path: 'solicitacao', component: AdminSolicitacaoComponent, children: 
                [
                    {
                        path: 'aberta', component: ListarSolicitacaoComponent
                    },
                    {
                        path: 'fechada', component: ListaSolicitacaoFechedaComponent
                    },
                    {
                        path: '**', redirectTo: ''
                    }
                ]
            },
            {
                path: 'termo', component: AdminUploadComponent, children:
                [
                    { path: 'upload', component: UploadComponent},
                    { path: 'lista/documentos', component: ListaDocsComponent }
                ]
            },
            {
                path: 'segurado', component: AdminSeguradoComponent, children:
                [
                    { path: 'edt/vinculo', component: EdtVinculoComponent }
                ]
            },
            {
                path: 'dirf', component: AdminDirfComponent, children:
                [
                    { path: 'upload', component: UploadDirfComponent }
                ]
            },
            {
                path: 'dados', component: AdminCarregarDadosComponent, children:
                [
                    {path: 'uploadDados', component: UploadDadosComponent },
                    {path: 'uploadDados2', component: UploadDados2Component }
                ]
            },
            { 
                path: '**', redirectTo: '' 
            }

        ]
    }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true});