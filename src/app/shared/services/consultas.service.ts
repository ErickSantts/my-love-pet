import { Consulta } from './../classes/consulta/consulta';
import { Injectable } from '@angular/core';
import { Pet } from '../classes/pet/pet';
import * as moment from 'moment';
import { Pessoa } from '../classes/pessoa/pessoa';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  }



  constructor(private httpCliente: HttpClient) { }

  getDefaultPessoa(): Pessoa {
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      name: '',
      email: '',
      contato: '',
      senha: '',
      dataNascimento: new Date,
      perfil: 'funcionario'
    }
  }

  getPets() {
    return this.httpCliente.get<Array<Pet>>(`${environment.baseUrlBackend}pets/pets`, this.options);
  }

  getPetById(id: string) {
    
  }

  getConsultas() {
    return this.httpCliente.get<Array<Consulta>>(`${environment.baseUrlBackend}owner/consultas`);
  }

  getConsultasById(id: number) {
    return this.httpCliente.get<Array<Consulta>>(`${environment.baseUrlBackend}cliente/consultas/${id}`)
  }

  getConsulta(id: string) {
    return this.httpCliente.get<Consulta>(`${environment.baseUrlBackend}owner/consulta/${id}`)
  }

  authenticate(email: string, senha: string) {
    return this.httpCliente.get<Pessoa>(`${environment.baseUrlBackend}login/${senha}/${email}`)
    //return this.pessoas.find(pessoa => pessoa.email == email && pessoa.senha == senha)
  }

  getFuncionarioById(id: string){
    return this.httpCliente.get<Pessoa>(`${environment.baseUrlBackend}funcionario/${id}`)
  }

  getFuncionarios() {
    return this.httpCliente.get<Array<Pessoa>>(`${environment.baseUrlBackend}funcionario/funcionarios`, this.options);
  }

  salvar(novo: Pessoa) {
    return this.httpCliente.post(`${environment.baseUrlBackend}funcionario/novo`, novo, this.options);

  }

  editarPessoa(pessoa: Pessoa) {

    //filteredPessoa = this.pessoas.find(p => p.id = pessoa.id)
  }

  getAllPessoas() {
   
  }


  getPessoaByConsulta(id: number) {
    return this.httpCliente.get<Pessoa>(`${environment.baseUrlBackend}owner/pessoabyconsulta/${id}`, this.options);
  }


}
