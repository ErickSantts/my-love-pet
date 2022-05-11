import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Pet } from 'src/app/shared/classes/pet/pet';
import { ConsultasService } from 'src/app/shared/services/consultas.service';

@Component({
  selector: 'app-funcionariopet',
  templateUrl: './funcionariopet.component.html',
  styleUrls: ['./funcionariopet.component.scss']
})
export class FuncionariopetComponent implements OnInit {

    pets!: Array<Pet>;
    displayedColumns: string[] = ['id', 'nome'];

    formFuncionario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dataNascimento: new FormControl('', Validators.required),
      contato: new FormControl('', Validators.required),
    });
    
    constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }

  ngOnInit(): void {
   //this.consultasServices.getPets().subscribe((pet) => {
   //   this.pets = pet;
   // })
  }

  editarPet(){
    alert("Em manutenção")
  }

  detalhesPet(){
    alert("Em manutenção")
  }
}
