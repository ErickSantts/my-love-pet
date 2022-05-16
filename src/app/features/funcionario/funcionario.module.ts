import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionariopetComponent } from './pages/funcionariopet/funcionariopet.component';
import { FuncionarioclieteComponent } from './pages/funcionariocliete/funcionariocliete.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'


const materialModules = [
  MatTableModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    FuncionarioComponent,
    FuncionariopetComponent,
    FuncionarioclieteComponent,
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule, ...materialModules
  ],
  exports:[FuncionarioComponent, FuncionarioclieteComponent, FuncionariopetComponent]
})
export class FuncionarioModule { }
