import { infMod } from './../../../Interfaces/infModal-interface';
import { ProyectosService } from './../../servicios/proyectosSv/proyectos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private r:ProyectosService) { }

  resProyectos:Array<infMod>=[];

  ngOnInit(): void {
    this.sus()
  }

  //haber quede que tengo que hacer llegar la respuesta del json al componente
  //y al modal, hice una interfaz, hace llegar el json, toy quemadisimo

  sus(){
    this.r.$resProyectos.subscribe({
      next:(r)=>{
        this.resProyectos=r;
      }
    })
  }
}
