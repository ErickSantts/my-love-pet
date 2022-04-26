import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FuncionarioComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports:[FuncionarioComponent]
})
export class FuncionarioModule { }
