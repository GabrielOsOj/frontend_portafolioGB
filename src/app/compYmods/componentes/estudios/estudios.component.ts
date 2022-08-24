import { expYest } from 'src/app/Interfaces/exp-interface';
import { EstudiosService } from './../../servicios/estudiosSv/estudios.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {

  constructor(private resEst:EstudiosService) { }

  estudios:Array<expYest>=new Array;

  ngOnInit(): void {
    
    this.impEstudios()

  }

  impEstudios(){
    this.resEst.$resEstudios.subscribe({
      next: r=>{
        this.estudios=r
      }
    })
  }
  



}
