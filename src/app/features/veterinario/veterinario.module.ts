import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VeterinarioComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    VeterinarioComponent
  ]
})
export class VeterinarioModule { }
