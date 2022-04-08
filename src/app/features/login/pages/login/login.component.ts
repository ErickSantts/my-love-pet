import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Pessoa } from './../../../../shared/classes/pessoa/pessoa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  pessoa!: Pessoa;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  authenticate() {
    const pessoa = this.loginService.authenticate(
      this.pessoa.email,
      this.pessoa.senha
    );

    if (!pessoa) {
      return (this.error = true);
    }

    localStorage.setItem('pessoa', JSON.stringify(pessoa));

    return this.router.navigateByUrl('/cliente');
  }
}