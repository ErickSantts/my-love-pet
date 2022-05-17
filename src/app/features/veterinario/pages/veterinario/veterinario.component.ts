import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/shared/classes/consulta/consulta';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { Pet } from 'src/app/shared/classes/pet/pet';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.scss']
})
export class VeterinarioComponent implements OnInit {

  pessoaLogada!: Pessoa
  consulta: boolean = false
  clientes!: Array<Pessoa>
  pets!: Array<Pet>

  novaConsulta: Consulta = this.consultasServices.getDefaultConsulta()

  formConsulta = new FormGroup({
    raca: new FormControl('', [Validators.required]),
    remedios: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    donoId: new FormControl('', [Validators.required]),
    petId: new FormControl('', [Validators.required]),
    idPessoa: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');

    if (pessoa) {
      this.pessoaLogada = JSON.parse(pessoa);
    }

    this.consultasServices.getClientes().subscribe((pessoas) => {
      this.clientes = pessoas
    });

    this.consultasServices.getPets().subscribe((pets) => {
      this.pets = pets
    })
  }

  cadastrarConsulta() {
    this.consulta = true;
  }

  cancelar() {
    this.consulta = false
  }

  salvar() {
    if(this.pessoaLogada.id){
    const formConsulta = this.formConsulta.value
    this.novaConsulta.idPet = formConsulta.petId,
      this.novaConsulta.idPessoa = formConsulta.donoId,
      this.novaConsulta.raca = formConsulta.raca,
      this.novaConsulta.remedios = formConsulta.remedios,
      this.novaConsulta.valor = formConsulta.valor,
      this.novaConsulta.detalhes = formConsulta.descricao,
      this.novaConsulta.idVeterinario = this.pessoaLogada.id.toString()
    }

    console.log(this.formConsulta.value)
    console.log(this.novaConsulta)
    this.consultasServices.salvarConsulta(this.novaConsulta).subscribe((pessoa) => {
      window.location.reload();
      alert('Consulta adicionada com sucesso')
      this.consulta = false;
    })
  }

}
