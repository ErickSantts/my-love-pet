import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonoComponent } from './pages/dono/dono.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContabilidadeComponent } from './pages/contabilidade/contabilidade.component';


const materialModules = [
  MatTableModule
];
@NgModule({
  declarations: [
    DonoComponent,
    FuncionariosComponent,
    ContabilidadeComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    MatTableModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [DonoComponent, FuncionariosComponent, ContabilidadeComponent]
})
export class DonoModule { }
