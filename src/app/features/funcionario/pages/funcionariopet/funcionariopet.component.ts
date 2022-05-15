import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';
import { Pet } from 'src/app/shared/classes/pet/pet';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionariopet',
  templateUrl: './funcionariopet.component.html',
  styleUrls: ['./funcionariopet.component.scss']
})
export class FuncionariopetComponent implements OnInit {

  pets!: Array<Pet>;
  clientes!: Array<Pessoa>
  displayedColumns: string[] = ['acao', 'nome'];
  cadastro: boolean = false;
  pet = this.consultasServices.getDefaultPet()

  formPet = new FormGroup({
    name: new FormControl('', Validators.required),
    raca: new FormControl('', Validators.required),
    dono: new FormControl('', Validators.required),
    idade: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.consultasServices.getPets().subscribe((pet) => {
      this.pets = pet;
    })
  }

  editarPet() {
    alert("Em manutenção")
  }

  detalhesPet() {
    alert("Em manutenção")
  }

  novoPetCadastro() {
    this.consultasServices.getClientes().subscribe((pessoa) => {
      this.clientes = pessoa
      this.cadastro = true
    })

  }

  cancelarCadastroPet() {
    this.cadastro = false;
  }

  salvarPet() {
    const formValue = this.formPet.value
    this.pet.nome = formValue.name,
      this.pet.raca = formValue.raca,
      this.pet.donoId = formValue.dono,
      this.pet.idade = formValue.idade

    this.consultasServices.salvarPet(this.pet).subscribe((pet) => {
      window.location.reload();
      alert('Pet adicionado com sucesso')
      this.cadastro = false;
    })
  }
}
