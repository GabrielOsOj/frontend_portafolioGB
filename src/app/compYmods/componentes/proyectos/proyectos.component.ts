import { estandar, proyectoIF } from './../../../Interfaces/estandar-interface';
import { ProyectosService } from './../../servicios/proyectosSv/proyectos.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private proyectosRes:ProyectosService) { }

  @Input() isLogged:boolean=false;

  resProyectos:Array<proyectoIF>=[];

  BackRes:boolean=false;

  ngOnInit(): void {
    this.sus()
  }


  sus(){
    this.proyectosRes.$resProyectos.subscribe({
      next:(r)=>{
        this.resProyectos=r;
        this.BackRes=true;
      }
    })
  }
}
