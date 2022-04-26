import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    VeterinarioComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    VeterinarioComponent
  ]
})
export class VeterinarioModule { }
