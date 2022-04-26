import { Component, OnInit, Input } from '@angular/core';
import { Consulta } from '../classes/consulta/consulta';
import { Pessoa } from '../classes/pessoa/pessoa';
import { ConsultasService } from './../services/consultas.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {

  pessoa?: Pessoa
  consultas!: Array<Consulta>

  @Input() perfil?: string;


  displayedColumns: string[] = ['id', 'nome', 'valor', 'dataConsulta', 'detalhes'];

  
  constructor(private consultasServices: ConsultasService) { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');
    
    if (pessoa) {
      this.pessoa = JSON.parse(pessoa);
      if(this.pessoa?.perfil == 'owner'){
        this.consultas = this.consultasServices.getConsultas();
      }
      else this.consultas = this.consultasServices.getConsultasById(this.pessoa!.id.toString())
    }
  }

}
