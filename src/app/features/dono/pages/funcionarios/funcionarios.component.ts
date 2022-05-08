import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  novoFuncionario: Pessoa = this.consultasServices.getDefaultPessoa();
  pessoas!: Array<Pessoa>;
  funcionarios!: Array<Pessoa>;
  displayedColumns: string[] = ['id', 'nome'];
  cadastro: boolean = false;
  detalhes: boolean = false;
  editar: boolean = false;
  funcionarioSelecionado!: Pessoa;

  formFuncionario = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', Validators.required),
    contato: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private consultasServices: ConsultasService, private ttpClient: HttpClient) { }

  ngOnInit(): void {
    this.consultasServices.getFuncionarios().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    })
    console.log(this.funcionarios)
  }

  newFuncionario() {
    this.cadastro = true;
  }
  salvar() {
    const formValue = this.formFuncionario.value

    this.novoFuncionario.name = formValue.name,
      this.novoFuncionario.email = formValue.email,
      this.novoFuncionario.dataNascimento = formValue.dataNascimento,
      this.novoFuncionario.contato = formValue.contato,
      this.novoFuncionario.perfil = 'funcionario',
      this.novoFuncionario.senha = '12345',

      this.consultasServices.salvar(this.novoFuncionario).subscribe((pessoa) => {

        window.location.reload();
        alert('Funcionario adicionado com sucesso')
      })

  }


  editarPessoa(pessoa: Pessoa) {

  }
  cancelar() {
    this.cadastro = false;
    this.editar = false;
  }
  gerarId() {

    return this.pessoas.length;
  }

  detalhesFuncionario(id: string) {
    this.consultasServices.getFuncionarioById(id).subscribe((funcionario) => {
      this.funcionarioSelecionado = funcionario
    })
    this.detalhes = true;
  }

   editarFuncionario(id: string) {
     this.consultasServices.getFuncionarioById(id).subscribe((funcionario) => {
      this.funcionarioSelecionado = funcionario
      this.formFuncionario = new FormGroup({
        name: new FormControl(this.funcionarioSelecionado.name, [Validators.required]),
        email: new FormControl(this.funcionarioSelecionado.email, [Validators.required]),
        dataNascimento: new FormControl(this.funcionarioSelecionado.dataNascimento, Validators.required),
        contato: new FormControl(this.funcionarioSelecionado.contato, Validators.required),
      });
  
      this.editar = true
    })

     
  }

  update() { }

  cancelarDetalhes() {
    this.detalhes = false;
    this.editar = false;
  }
}
