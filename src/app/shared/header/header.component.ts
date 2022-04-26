import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/features/login/services/login.service';
import { Pessoa } from '../classes/pessoa/pessoa';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pessoa?: Pessoa
  perfil?: string
  constructor(private router: Router, private serviceLogin: LoginService) { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');
    if (pessoa) {
      this.pessoa = JSON.parse(pessoa);
      this.perfil = this.pessoa?.perfil
    }
 
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

  exit() {
    localStorage.clear();
    this.navigateByUrl('/login');

    
  }

  navegar(url: string) {
    this.navigateByUrl(url);
  }
}
