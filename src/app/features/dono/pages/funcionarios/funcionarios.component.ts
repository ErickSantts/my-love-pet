import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
})
export class FuncionariosComponent implements OnInit {
  pessoas!: Array<Pessoa>;
  funcionarios!: Array<Pessoa>;
  displayedColumns: string[] = ['id', 'nome'];
  cadastro: boolean = false;

  formFuncionario = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', Validators.required),
    contato: new FormControl('', Validators.required),
  });

  constructor(private consultasServices: ConsultasService) {}

  ngOnInit(): void {
    this.funcionarios = this.consultasServices.getFuncionarios();
  }

  newFuncionario() {
    this.cadastro = true;
  }
  salvar() {
    const pessoa = new Pessoa();
    const formValue = this.formFuncionario.value;
    pessoa.nome = formValue.name;
    pessoa.email = formValue.email;
    pessoa.dataNascimento = formValue.dataNascimento;
    pessoa.contato = formValue.contato;
    pessoa.perfil = 'funcionario';
    pessoa.senha = '12345';
    pessoa.id = this.gerarId().toString();

    this.consultasServices.salvar(pessoa);

    alert(pessoa.id);
    this.cadastro = false;
    this.funcionarios = this.consultasServices.getFuncionarios();
  }
  editarPessoa(pessoa:Pessoa){
    
  }
  cancelar() {
    this.cadastro = false;
  }
  gerarId() {
    this.pessoas = this.consultasServices.getAllPessoas();
    return this.pessoas.length;
  }
}
