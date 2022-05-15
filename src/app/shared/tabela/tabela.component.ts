import { Component, OnInit, Input } from '@angular/core';
import { Consulta } from '../classes/consulta/consulta';
import { Pessoa } from '../classes/pessoa/pessoa';
import { ConsultasService } from './../services/consultas.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  pessoa!: Pessoa
  consultas!: Array<Consulta>
  detalhes!: boolean;
  consulta!: Consulta;
  pessoaCliente?: Pessoa
  funcionarios?: Array<Pessoa>

  @Input() perfil?: string;


  displayedColumns: string[] = ['id', 'valor', 'dataConsulta', 'detalhes'];


  constructor(private consultasServices: ConsultasService ) { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');


    if (pessoa) {
      this.pessoa = JSON.parse(pessoa);
      if (this.pessoa?.perfil == 'owner') {
        this.consultasServices.getConsultas().subscribe((consultas) => {
          this.consultas = consultas
        });
      } if (this.pessoa?.perfil == 'cliente' && this.pessoa.id != null) {
        this.consultasServices.getConsultasById(this.pessoa.id).subscribe((consultas) => {
          this.consultas = consultas
        });
      }
      if (this.pessoa?.perfil == 'funcionario') {
        this.consultasServices.getConsultas().subscribe((consultas) => {
          this.consultas = consultas
        });
      }
      if (this.pessoa?.perfil == 'veterinario') {
        this.consultasServices.getConsultas().subscribe((consultas) => {
          this.consultas = consultas
        });
      }

    }
  }

  pesquisar(id: string) {
    this.detalhes = true;
    this.consultasServices.getConsulta(id).subscribe((consulta) => {
      this.consulta = consulta
    });

    console.log(this.consulta)
    if (this.consulta.id)
      this.consultasServices.getPessoaByConsulta(this.consulta.id).subscribe((pessoa) => {
        this.pessoaCliente = pessoa

      })
    console.log(this.pessoaCliente)
  }

  fecharDetalhes() {
    this.detalhes = false;
  }

}
