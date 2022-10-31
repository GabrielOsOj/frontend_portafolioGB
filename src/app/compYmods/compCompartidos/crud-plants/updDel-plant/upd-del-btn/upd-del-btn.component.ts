import { EditDeleteCreateService } from './../../../../servicios/edit-delete-createSv/edit-delete-create.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upd-del-btn',
  templateUrl: './upd-del-btn.component.html',
  styleUrls: ['./upd-del-btn.component.css'],
})
export class UpdDelBTNComponent implements OnInit {
  @Input() objEdit: any = {};
  @Input() proyectoEdit: any = {};

  @Input() seccion: number = NaN;

  modDelEdit: Array<boolean> = [false, false];

  constructor(public EDCsv: EditDeleteCreateService) {}

  ngOnInit(): void {}

  modLoad(seccion: number, indice: number): void {
    if (seccion == 0) {
      this.EDCsv.cambiador(seccion, indice);
      this.EDCsv.$selectObj.next(this.objEdit);
  
    } else {
      this.EDCsv.cambiador(seccion, indice);
      this.EDCsv.$proyectoEdit.next(this.proyectoEdit);
     
    }
  }
}
