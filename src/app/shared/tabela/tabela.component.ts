import { Component, OnInit, Input } from '@angular/core';
import { Consulta } from '../classes/consulta/consulta';
import { ConsultasService } from './../services/consultas.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() perfil?: string;

  displayedColumns: string[] = ['id', 'nome', 'valor', 'dataConsulta'];

  consultas: Array<Consulta> = this.consultasServices.getConsultas();
  constructor(private consultasServices: ConsultasService) {}

  ngOnInit(): void {}
}
