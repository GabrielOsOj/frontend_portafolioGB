import { HeaderInfoService } from './../../servicios/headerInfoSv/header-info.service';
import {  estYexpIF } from './../../../Interfaces/estandar-interface';
import { ExpSvService } from '../../servicios/expSv/exp-sv.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit, OnDestroy {
  respExp: Array<estYexpIF> = [];
  backRes: boolean = false;


  @Input() isLogged:boolean =false;

  constructor(private datos: ExpSvService, 
    private HI:HeaderInfoService) {}

  ngOnInit(): void {
    this.impExp();
  } 

  impExp() {
    this.datos.$exp.subscribe({
      next: (r:Array<estYexpIF>) => {
        this.respExp = r;
        this.backRes = true;
        this.HI.$expInfo.next(this.respExp.length != 0);
      }
    });
  }

  ngOnDestroy(): void {
    
  }
}
