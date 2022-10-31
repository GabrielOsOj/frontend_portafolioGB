import {  estYexpIF } from './../../../Interfaces/estandar-interface';
import { ExpSvService } from './../../servicios/expSv/exp-sv.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit, OnDestroy {
  expLab: Array<estYexpIF> = [];
  backRes: boolean = false;


  @Input() isLogged:boolean =false;

  constructor(private datos: ExpSvService) {}

  ngOnInit(): void {
    this.impExp();
  } 

  impExp() {
    this.datos.$exp.subscribe({
      next: (r) => {
        this.expLab = r;
        this.backRes = true;
      }
    });
  }

  ngOnDestroy(): void {
    
  }
}
