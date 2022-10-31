import { EditDeleteCreateService } from './../../../../servicios/edit-delete-createSv/edit-delete-create.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-btn',
  templateUrl: './create-btn.component.html',
  styleUrls: ['./create-btn.component.css']
})
export class CreateBTNComponent implements OnInit {

  @Input() crear:number = NaN ;
  @Input() tipo:string = "";


  constructor(private EDCsv:EditDeleteCreateService) { }

  ngOnInit(): void {
  
  }

  modLoad(i: number) {
    this.EDCsv.cambiador(this.crear,0);
    this.EDCsv.$tipo.next(this.tipo)
  }


  //bueno, la idea es hacer 2 forms para crear nuevas cosas, uno
  //especial para las skills, y otro para lo demas, la idea es que
  //con el btn nos va a llegar que tipo de cosa vamos a crear, 
  //de ahi desplegamos el modal correspondiente
//o podes intentar desplegar el modal de edicion en blanco, divertite;

}
