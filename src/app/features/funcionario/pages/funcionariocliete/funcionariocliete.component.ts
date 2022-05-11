import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionariocliete',
  templateUrl: './funcionariocliete.component.html',
  styleUrls: ['./funcionariocliete.component.scss']
})
export class FuncionarioclieteComponent implements OnInit {

  clientes!: Array<Pessoa>;
  displayedColumns: string[] = ['id', 'nome'];

  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.consultasServices.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })
  }

  editarCliente(){
    alert("Em manutenção")
  }

  detalhesCliente(){
    alert("Em manutenção")
  }

}
