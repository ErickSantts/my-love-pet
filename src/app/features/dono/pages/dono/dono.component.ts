import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/classes/pessoa/pessoa';

@Component({
  selector: 'app-dono',
  templateUrl: './dono.component.html',
  styleUrls: ['./dono.component.scss']
})
export class DonoComponent implements OnInit {

  pessoaLogada!: Pessoa

  constructor() { }

  ngOnInit(): void {
    const pessoa = localStorage.getItem('pessoa');

    if (pessoa) {
      this.pessoaLogada = JSON.parse(pessoa);
    }
  }

}
