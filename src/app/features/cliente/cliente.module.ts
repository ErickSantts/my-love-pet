import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

@NgModule({
  declarations: [ClienteComponent, PerfilComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClienteComponent],
})
export class ClienteModule {}
