import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinarioComponent } from './pages/veterinario/veterinario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    VeterinarioComponent
  ],
  imports: [
    CommonModule, SharedModule, FormsModule, ReactiveFormsModule, ...materialModules
  ],
  exports: [
    VeterinarioComponent
  ]
})
export class VeterinarioModule { }
