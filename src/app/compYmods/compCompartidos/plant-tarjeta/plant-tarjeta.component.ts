import { expYest } from '../../../Interfaces/exp-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-tarjeta',
  templateUrl: './plant-tarjeta.component.html',
  styleUrls: ['./plant-tarjeta.component.css']
})
export class PlantTarjetaComponent implements OnInit {

  @Input() exp:expYest ={id:0,url:"",titulo:"",descripcion:""};
  @Input() derecho:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
