import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  cadastroPessoa: boolean = false;
  cadastroPet: boolean = false;
  novoFuncionario: Pessoa = this.consultasServices.getDefaultPessoa();

  formPessoa = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', Validators.required),
    contato: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }


  salvar() {
    const formValue = this.formPessoa.value
    this.novoFuncionario.name = formValue.name,
      this.novoFuncionario.email = formValue.email,
      this.novoFuncionario.dataNascimento = formValue.dataNascimento,
      this.novoFuncionario.contato = formValue.contato,
      this.novoFuncionario.perfil = 'cliente',
      this.novoFuncionario.senha = '12345'
    this.consultasServices.salvar(this.novoFuncionario).subscribe((pessoa) => {
      window.location.reload();
      alert('Cliente adicionado com sucesso')
      this.cadastroPessoa = false;
    })

  }


  ngOnInit(): void {
  }

  cancelar() {
    this.cadastroPessoa = false;
  }

  novaPessoa() {
    this.cadastroPessoa = true;
  }
  novoPet() {
    this.cadastroPet = true
  }
}
