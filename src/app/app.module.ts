import { ClienteModule } from './features/cliente/cliente.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './features/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VeterinarioModule } from './features/veterinario/veterinario.module';
import { FuncionarioModule } from './features/funcionario/funcionario.module';
import { FuncionariosComponent } from './features/dono/pages/funcionarios/funcionarios.component';
import { DonoModule } from './features/dono/dono.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SharedModule,
    FormsModule,
    ClienteModule,
    VeterinarioModule,
    FuncionarioModule,
    DonoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
