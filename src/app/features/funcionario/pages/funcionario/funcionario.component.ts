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


  constructor(private router: Router, private consultasServices: ConsultasService, private httpClient: HttpClient) { }




  ngOnInit(): void {
  }

}
