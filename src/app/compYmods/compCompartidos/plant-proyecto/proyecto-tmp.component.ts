import { estandar, proyectoIF } from './../../../Interfaces/estandar-interface';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyecto-tmp',
  templateUrl: './proyecto-tmp.component.html',
  styleUrls: ['./proyecto-tmp.component.css'],
})
export class ProyectoTmpComponent implements OnInit {
  @Input() info: proyectoIF = {
    descripcion: '',
    id: 0,
    titulo: '',
    idImg: [],
  };

  constructor(private render: Renderer2) {}

  @ViewChild('primeraImg')
  img1!: ElementRef;

  ngOnInit(): void {}

  urlImgs = environment.urlImagenes;

  posicion: number = -250;

  izq() {
    const img1 = this.img1.nativeElement;
    if (this.posicion < -250) {
      this.posicion += 250;
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    } else if (this.posicion == -250) {
      this.posicion += -250*(this.info.idImg.length-1);
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    }
  }

  der() {
    const img1 = this.img1.nativeElement;

    if (this.posicion > -250*this.info.idImg.length) {
      this.posicion -= 250;
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    } else {
      this.posicion += 250*(this.info.idImg.length-1);
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    }
  }
}
