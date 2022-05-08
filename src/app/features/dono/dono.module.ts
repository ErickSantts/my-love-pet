import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonoComponent } from './pages/dono/dono.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const materialModules = [
  MatTableModule
];
@NgModule({
  declarations: [
    DonoComponent,
    FuncionariosComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    MatTableModule, 
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [DonoComponent, FuncionariosComponent]
})
export class DonoModule { }
