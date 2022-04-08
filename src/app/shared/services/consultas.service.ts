import { Consulta } from './../classes/consulta/consulta';
import { Injectable } from '@angular/core';
import { Pet } from '../classes/pet/pet';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  pet = Pet;
  pets: Array<Pet> = [
    {
      id: '1',
      nome: 'Mel',
      raca: 'Vira Lata',
      donoId: '1',
      idade: '4'
    },
    {
      id: '2',
      nome: 'Spyck',
      raca: 'Labrador',
      donoId: '2',
      idade: '3'
    },
    {
      id: '3',
      nome: 'Bruce',
      raca: 'Husky Siberiano',
      donoId: '2',
      idade: '2'
    },
  ];

  consultas: Array<Consulta> = [
    {
      id: '1',
      nome: 'Spyck',
      donoId: '2',
      raca: '1',
      dataConsulta: new Date(),
      remedios: 'Dipirona',
      valor: 200,
    },
    {
      id: '2',
      nome: 'Mel',
      donoId: '1',
      raca: '1',
      dataConsulta: new Date(),
      remedios: 'Dipirona, Remedio pra verme',
      valor: 120,
    },
    {
      id: '3',
      nome: 'Bruce',
      donoId: '2',
      raca: '1',
      dataConsulta: new Date(),
      remedios: 'Remedio pra queda de pelos',
      valor: 110,
    },
  ];

  pessoas = [ {
    
      id: '1',
      nome: 'Erick S Batista',
      email: 'dsantoserick@gmail.com',
      contato: '(95) 99156-0814',
      dataNascimento: new Date(),
      senha: '123',
      perfil: 'cliente',
    
    
  },
  {
    
    id: '2',
    nome: 'Thaiza S Batista',
    email: 'thaiza@gmail.com',
    contato: '(95) 99156-0814',
    dataNascimento: new Date(),
    senha: '123',
    perfil: 'cliente',
}]
  constructor() {}

  getPets() {
    return this.pets;
  }

  getPetById(id: string) {
    return this.pets.find((pet) => pet.id == id);
  }

  getConsultas() {
    return this.consultas;
  }

  authenticate(email: string, senha: string){
    return this.pessoas.find(pessoa => pessoa.email == email && pessoa.senha == senha)
  }
}
