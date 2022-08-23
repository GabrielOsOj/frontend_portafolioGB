import { ExpSvService } from './../../servicios/exp-sv.service';
import { Component, OnInit } from '@angular/core';
import { expYest } from 'src/app/Interfaces/exp-interface';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  objetoTest: Array<expYest> = new Array<expYest>;
   
  constructor(private datos: ExpSvService) {}

  ngOnInit(): void {
    this.datos.$cosa.subscribe({
      next: (r) => {
        console.log(r)
        this.objetoTest=r
      },
    });

  }


}
