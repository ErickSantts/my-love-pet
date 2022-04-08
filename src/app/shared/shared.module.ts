import { TabelaComponent } from './tabela/tabela.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
const materialModules = [
  MatTableModule
];
@NgModule({
  declarations: [FooterComponent, HeaderComponent, TabelaComponent],
  imports: [CommonModule, ...materialModules],
  exports: [FooterComponent, HeaderComponent, TabelaComponent],
})
export class SharedModule {}
