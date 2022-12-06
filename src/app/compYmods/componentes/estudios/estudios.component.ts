import { HeaderInfoService } from './../../servicios/headerInfoSv/header-info.service';
import { estandar, estYexpIF } from './../../../Interfaces/estandar-interface';
import { EstudiosService } from '../../servicios/estudiosSv/estudios.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent implements OnInit {
  constructor(private resEst: EstudiosService, private HI: HeaderInfoService) {}

  @Input() isLogged: boolean = false;

  resEstudios: Array<estYexpIF> = [];

  backRes: boolean = false;

  ngOnInit(): void {
    this.impEstudios();
  }

  impEstudios() {
    this.resEst.$resEstudios.subscribe({
      next: (r: Array<estYexpIF>) => {
        this.resEstudios = r;
        this.backRes = true;
        this.HI.$estInfo.next(this.resEstudios.length != 0);
      },
    });
  }
}
