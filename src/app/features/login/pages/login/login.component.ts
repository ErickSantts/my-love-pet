import { Pessoa } from './../../../../shared/classes/pessoa/pessoa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  pessoa!: Pessoa

  constructor() {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  authenticate() {
    alert("Oi")
  }
}
