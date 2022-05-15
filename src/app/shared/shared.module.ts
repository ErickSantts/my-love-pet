import { TabelaComponent } from './tabela/tabela.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatTableModule} from '@angular/material/table';
import { CurrencyBrPipe } from './pipes/currency-br.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { PhonePipe } from './pipes/phone.pipe';
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
  declarations: [FooterComponent, HeaderComponent, TabelaComponent, CurrencyBrPipe, CpfPipe, PhonePipe],
  imports: [CommonModule, ...materialModules],
  exports: [FooterComponent, HeaderComponent, TabelaComponent, CurrencyBrPipe, CpfPipe, PhonePipe],
})
export class SharedModule {}
