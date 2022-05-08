import { ConsultasService } from './../../../../shared/services/consultas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  
  pet = this.consultaService.getPetById('2');
  constructor(private consultaService: ConsultasService) {}

  ngOnInit(): void {}
}
