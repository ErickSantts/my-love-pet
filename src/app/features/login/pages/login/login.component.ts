import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { Pessoa } from './../../../../shared/classes/pessoa/pessoa';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  pessoa!: Pessoa;

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  })

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  authenticate() {
    const formValue = this.formLogin.value
    this.loginService.authenticate(
      formValue.email,
      formValue.senha
    ).subscribe((pessoa) => {
      if (!pessoa) {
        return (this.error = true);
      }

      localStorage.setItem('pessoa', JSON.stringify(pessoa));

      console.log('Perfil', pessoa.perfil)

      if (pessoa.perfil == 'owner') {
        return this.router.navigateByUrl('/owner')
      }
      else if (pessoa.perfil == 'funcionario') {
        return this.router.navigateByUrl('/funcionario');
      } else if (pessoa.perfil == 'veterinario') {
        return this.router.navigateByUrl('/veterinario');
      }
      return this.router.navigateByUrl('/cliente');
    });



  }
}
