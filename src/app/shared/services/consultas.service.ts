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
      perfil: 'funcionario',
    }
  }

  getDefaultConsulta(): Consulta{
    const dateToday = moment().format('YYYY/MM/DD');
    return {
      pet: this.getDefaultPet(),
      dono: this.getDefaultPessoa(),
      raca: '',
      dataConsulta: new Date(),
      remedios: '',
      valor:0,
      detalhes: '',
      veterinarioId: this.getDefaultPessoa()
    }
  }


  getDefaultPet(): Pet {
    return {
      nome: '',
      raca: '',
      dono: this.getDefaultPessoa(),
      idade: ''
    }
  }

  getPets() {
    return this.httpCliente.get<Array<Pet>>(`${environment.baseUrlBackend}pets/pets`, this.options);
  }

  getPetById(id: string | number) {
    return this.httpCliente.get<Pet>(`${environment.baseUrlBackend}pets/pet/${id}`, this.options);
  }

  getClienteById(id: string | number) {
    return this.httpCliente.get<Pessoa>(`${environment.baseUrlBackend}funcionario/cliente/${id}`, this.options);
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

  getClientes() {
    return this.httpCliente.get<Array<Pessoa>>(`${environment.baseUrlBackend}funcionario/clientes`, this.options);
  }

  salvar(novo: Pessoa) {
    return this.httpCliente.post(`${environment.baseUrlBackend}funcionario/novo`, novo, this.options);
  }

  salvarPet(pet: Pet) {
    return this.httpCliente.post(`${environment.baseUrlBackend}funcionario/novo/pet`, pet, this.options);
  }

  salvarConsulta(consulta: Consulta) {
    return this.httpCliente.post(`${environment.baseUrlBackend}funcionario/nova/consulta`, consulta, this.options);
  }

  update(id: number,body: { name: string, email: string, dataNascimento: Date, contato: string, perfil: string }) {
    return this.httpCliente.put<any>(`${environment.baseUrlBackend}owner/atualizacao/${id}`, body, this.options);
  }

  getAllPessoas() {
   
  }


  getPessoaByConsulta(id: number) {
    return this.httpCliente.get<Pessoa>(`${environment.baseUrlBackend}owner/pessoabyconsulta/${id}`, this.options);
  }


}
