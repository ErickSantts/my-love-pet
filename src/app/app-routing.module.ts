import { ClienteComponent } from './features/cliente/pages/cliente/cliente.component';
import { LoginComponent } from './features/login/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/guard.guard';
import { DonoComponent } from './features/dono/pages/dono/dono.component';
import { FuncionarioComponent } from './features/funcionario/pages/funcionario/funcionario.component';
import { VeterinarioComponent } from './features/veterinario/pages/veterinario/veterinario.component';
import { FuncionariosComponent } from './features/dono/pages/funcionarios/funcionarios.component';
import { ContabilidadeComponent } from './features/dono/pages/contabilidade/contabilidade.component';
import { FuncionarioclieteComponent } from './features/funcionario/pages/funcionariocliete/funcionariocliete.component';
import { FuncionariopetComponent } from './features/funcionario/pages/funcionariopet/funcionariopet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente',
    component: ClienteComponent, canActivate: [AuthGuard]
  },
  {
    path: 'owner',
    component: DonoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'veterinario',
    component: VeterinarioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'funcionarios',
    component: FuncionariosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'funcionario-clientes',
    component: FuncionarioclieteComponent, canActivate: [AuthGuard]
  },
  {
    path: 'funcionario-pets',
    component: FuncionariopetComponent, canActivate: [AuthGuard]
  },
  {
    path: 'contabilidade',
    component: ContabilidadeComponent, canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
