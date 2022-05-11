import { ConsultasService } from './../../../../shared/services/consultas.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { Consulta } from 'src/app/shared/classes/consulta/consulta';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

  pet = this.consultaService.getPetById('2');
  constructor(private consultaService: ConsultasService) { }

  pessoaLogada!: Pessoa
  consultas!: Array<Consulta>
  qntConsultas!: number

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');

    if (pessoa) {
      this.pessoaLogada = JSON.parse(pessoa);
      this.consultaService.getConsultasById(this.pessoaLogada.id!).subscribe((consultas) => {
        this.consultas = consultas
        this.qntConsultas = consultas.length
      });
      
      console.log(this.qntConsultas, this.consultas)
    }


  }
}
