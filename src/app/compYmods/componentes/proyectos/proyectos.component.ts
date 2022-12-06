import { HeaderInfoService } from './../../servicios/headerInfoSv/header-info.service';
import { proyectoIF } from './../../../Interfaces/estandar-interface';
import { ProyectosService } from '../../servicios/proyectosSv/proyectos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  constructor(
    private proyectosRes: ProyectosService,
    private HI: HeaderInfoService
  ) {}

  @Input() isLogged: boolean = false;

  resProyectos: Array<proyectoIF> = [];

  BackRes: boolean = false;

  ngOnInit(): void {
    this.sus();
  }

  sus() {
    this.proyectosRes.$resProyectos.subscribe({
      next: (r: any) => {
        this.resProyectos = r;
        this.BackRes = true;
        this.HI.$proyInfo.next(this.resProyectos.length != 0);
      },
    });
  }
}
