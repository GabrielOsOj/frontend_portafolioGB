import { estandar } from './../../../../../Interfaces/estandar-interface';
import { objSelec } from './../../../../../Interfaces/objSelec-interface';
import { CrudService } from './../../../../servicios/crudSv/crud.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-upd-del-btn',
  templateUrl: './upd-del-btn.component.html',
  styleUrls: ['./upd-del-btn.component.css'],
})
export class UpdDelBTNComponent implements OnInit {
  @Input() objSelect: estandar = {
    id: 2,
    tipo: 'estudios',
    titulo: 'udemy',
    url: [
      'http://localhost/mockParaPortafolio/fotosMock/spotifyLogo.jpg',
      'http://localhost/mockParaPortafolio/fotosMock/spotifyLogoAzul.jpg',
      'http://localhost/mockParaPortafolio/fotosMock/spotifyLogoRojo.jpg',
    ],
    descripcion: 'cursos de manera autodidacta',
  };

  modDelEst: boolean = false;
  modEditEst: boolean = true;

  imgSelect: Array<string> = this.objSelect.url;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {}

  changeDel() {
    this.modDelEst == false
      ? (this.modDelEst = true)
      : (this.modDelEst = false);
  }

  changeEdit() {
    this.modEditEst == false
      ? (this.modEditEst = true)
      : (this.modEditEst = false);
  }

  borrar(id: number, tipo: string) {
    this.crud.deleteSv(id, tipo).subscribe();
    window.location.reload();
  }

  cos($event: any) {
    console.log($event);
  }

  delImg(img: string) {
    let test: Array<string>=this.imgSelect;

    test.forEach((r) => {
      if (r !== img) {
        test.push(img);
      };

    });
    
    this.imgSelect=test;
    console.log(this.imgSelect)

    //eu, aca tener que lograr que cuando haces click en la foto se 
    //añada a un array y ese array sea el que mandas por la peticion
    // no tengo ni idea como hacerlo ahora mismo, suerte yo del futuro

    //aaa yo del pasado sos re troll
    
  }
}
