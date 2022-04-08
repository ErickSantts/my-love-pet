import { Router } from '@angular/router';
import { ConsultasService } from './../../../shared/services/consultas.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private consultasService: ConsultasService,
    private router: Router
  ) {}

  authenticate(email: string, senha: string) {
    return this.consultasService.authenticate(email, senha);
  }
}
