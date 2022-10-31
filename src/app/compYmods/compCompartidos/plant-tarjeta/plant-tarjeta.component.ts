import { environment } from './../../../../environments/environment';
import { LoginService } from './../../servicios/loginSv/login.service';
import { estandar, estYexpIF } from './../../../Interfaces/estandar-interface';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-tarjeta',
  templateUrl: './plant-tarjeta.component.html',
  styleUrls: ['./plant-tarjeta.component.css'],
})
export class PlantTarjetaComponent implements OnInit {
  @Input() exp: estYexpIF = {
    id: 0,
    tipo: '',
    titulo: '',
    url: '',
    descripcion: '',
  };

  @Input() derecho: boolean = false;

  public url = environment.urlImagenes;

  isLogged: boolean = false;

  constructor(private lgsv: LoginService) {}

  ngOnInit(): void {

  }

}
