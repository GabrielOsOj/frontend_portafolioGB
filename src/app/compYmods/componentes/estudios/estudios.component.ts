import { estandar, estYexpIF } from './../../../Interfaces/estandar-interface';
import { EstudiosService } from './../../servicios/estudiosSv/estudios.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  constructor(private resEst:EstudiosService) { }

  @Input() isLogged:boolean =false;

  estudios:Array<estYexpIF>= [];

  backRes:boolean = false;

  ngOnInit(): void {
    
    this.impEstudios()

  }

  impEstudios(){
    this.resEst.$resEstudios.subscribe({
      next: r=>{
        this.estudios=r;
        this.backRes=true;
      }
    })
  }
  



}
