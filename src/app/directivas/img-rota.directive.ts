import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgRota]'
})
export class ImgRotaDirective {

  constructor(private src:ElementRef) {
  }

  ImgsError:Array<string>=['../../assets/ImgsRespaldo/1.png','../../assets/ImgsRespaldo/2.jpg','../../assets/ImgsRespaldo/3.jpg'];

  ramdom():number{
    return Math.floor(Math.random() * (3 - 0) + 0);
  }
  
  @HostListener('error') loadFail(){
    let foto = this.src.nativeElement;
    foto.src = this.ImgsError[this.ramdom()];
    console.error("A FALLADO LA CARGA DE LA FOTO!");
  }
}
