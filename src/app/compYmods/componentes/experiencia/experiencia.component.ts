import { ExpSvService } from './../../servicios/expSv/exp-sv.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { expYest } from 'src/app/Interfaces/exp-interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit, OnDestroy {
  objetoTest: Array<expYest> = new Array<expYest>();

  constructor(private datos: ExpSvService) {}

  ngOnInit(): void {
    this.impExp();
  }

  impExp() {
    this.datos.$exp.subscribe({
      next: (r) => {
        this.objetoTest = r;
      }
    });
  }

  ngOnDestroy(): void {}
}
