import { estandar, estYexpIF, proyectoIF } from './../../../Interfaces/estandar-interface';

import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EditDeleteCreateService {
  constructor() {}

  //0:control estYexp
  //1:control skill
  //2:control proyectos
  //3:control modal edicion pagina principal
  //.0: crear, .1: editar, .2;eliminar


  $open: Array<Array<boolean>> = [
    [false, false, false],
    [false],
    [false, false, false],
    [false]
  ];

  $tipo: BehaviorSubject<any> = new BehaviorSubject<string>("");


  $selectObj: BehaviorSubject<any> = new BehaviorSubject<estYexpIF>({
    descripcion: '',
    url: '',
    id: 0,
    titulo: '',
  });

  $proyectoEdit: BehaviorSubject<any> = new BehaviorSubject<proyectoIF>(
    {
      id:0,
      descripcion:"",
      titulo:"",
      idImg:[]
    }
  ); 

  cambiador(tipo:number, modal:number) {
    this.$open[tipo][modal]=!this.$open[tipo][modal]
  }
}
