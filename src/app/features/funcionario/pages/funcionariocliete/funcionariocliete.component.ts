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
  cadastroPessoa: boolean = false;
  cadastroPet: boolean = false;
  novoCliente: Pessoa = this.consultasServices.getDefaultPessoa();

  formPessoa = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('',[Validators.required]),
    contato: new FormControl('', [Validators.required]),
  });
  
  clientes!: Array<Pessoa>;
  displayedColumns: string[] = ['id', 'nome'];

  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.consultasServices.getClientes().subscribe((clientes) => {
      this.clientes = clientes;
    })
  }


  salvar() {
    const formValue = this.formPessoa.value
    this.novoCliente.name = formValue.name,
      this.novoCliente.email = formValue.email,
      this.novoCliente.dataNascimento = formValue.dataNascimento,
      this.novoCliente.contato = formValue.contato,
      this.novoCliente.perfil = 'cliente',
      this.novoCliente.senha = '12345'
    this.consultasServices.salvar(this.novoCliente).subscribe((pessoa) => {
      window.location.reload();
      alert('Cliente adicionado com sucesso')
      this.cadastroPessoa = false;
    })

  }

  editarCliente(){
    alert("Em manutenção")
  }

  detalhesCliente(){
    alert("Em manutenção")
  }
  cancelar() {
    this.cadastroPessoa = false;
  }

  novaPessoa() {
    this.cadastroPessoa = true;
  }
}
