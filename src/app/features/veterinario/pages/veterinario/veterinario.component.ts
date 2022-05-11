import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';

@Component({
  selector: 'app-veterinario',
  templateUrl: './veterinario.component.html',
  styleUrls: ['./veterinario.component.scss']
})
export class VeterinarioComponent implements OnInit {

  pessoaLogada!: Pessoa
  consulta: boolean = false

  formConsulta = new FormGroup({
    pet: new FormControl('', [Validators.required]),
    dono: new FormControl('', [Validators.required]),
    raca: new FormControl('', [Validators.required]),
    remedios: new FormControl('', [Validators.required]),
    valor: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
  });

  constructor() { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');

    if (pessoa) {
      this.pessoaLogada = JSON.parse(pessoa);
    }
  }

  novaConsulta() {
    this.consulta = true;
  }

  cancelar() {
    this.consulta = false
  }

  salvar() {

  }

}
