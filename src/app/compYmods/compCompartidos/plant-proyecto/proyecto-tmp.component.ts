import { estandar, proyectoIF } from './../../../Interfaces/estandar-interface';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
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

  AnchoResp:number = 0;
  posicion:number = 0;

  ngOnInit(): void {
    this.isResp();
  }

  @HostListener('window:resize',['$event'])
  anchoCambio(event:any){
    this.isResp();
  }

  urlImgs = environment.urlImagenes;

  isResp():void{
    if (window.innerWidth<400){
      this.AnchoResp=150;
      this.posicion=-150;
      return
    }
    this.AnchoResp=250;
    this.posicion=-250;
  }

  izq() {
    const img1 = this.img1.nativeElement;

    if (this.posicion < -this.AnchoResp) {
      this.posicion += this.AnchoResp;
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    } else if (this.posicion == -this.AnchoResp) {
      this.posicion += -this.AnchoResp*(this.info.idImg.length-1);
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    }
  }

  der() {
    const img1 = this.img1.nativeElement;

    if (this.posicion > -this.AnchoResp*this.info.idImg.length) {
      this.posicion -= this.AnchoResp;
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    } else {
      this.posicion += this.AnchoResp*(this.info.idImg.length-1);
      this.render.setStyle(img1, 'margin-left', `${this.posicion}px`);
    }
  }

}

