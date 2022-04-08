import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './pages/cliente/cliente.component';

@NgModule({
  declarations: [ClienteComponent],
  imports: [CommonModule, SharedModule],
  exports: [ClienteComponent],
})
export class ClienteModule {}
