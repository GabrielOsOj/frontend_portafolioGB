import { infMod } from './../../../../Interfaces/infModal-interface';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit, AfterViewInit {
  @ViewChild('modalContent') Mcontent!: ElementRef;
  @ViewChild('modal') Modal!: ElementRef;

  @Output() isOpen: EventEmitter<boolean> = new EventEmitter();
  @Input() openFromDom: boolean = false;

  // @Input() Minfo: infMod = {
  //   titulo: '',
  //   url: [],
  //   descripcion: '',
  //   tecnologias: ["1","2","3","4"],
  // };

  //sacar lo de abajo
  @Input() Minfo: infMod ={
		"titulo": "clon de spotify",
		"url": [
			"http://localhost/mockParaPortafolio/fotosMock/spotifyLogo.jpg",
			"http://localhost/mockParaPortafolio/fotosMock/spotifyLogoAzul.jpg",
			"http://localhost/mockParaPortafolio/fotosMock/spotifyLogoRojo.jpg"
		],
		"descripcion": "clon funcional de spotify, desarrollado con angular, tipescript, html y css",
		"tecnologias": [
			["angular","f00"],
			["tipescript","0ff"],
			["bootstrap","a20"],
			["html","e10"]
		]
	}

  constructor(private abstracte: Renderer2) {}

  ngAfterViewInit(): void {
    this.openText();
  }

  closeText() {
    this.isOpen.emit(false);
    this.abstracte.setStyle(this.Mcontent.nativeElement, 'display', 'none');

    this.abstracte.setStyle(
      this.Modal.nativeElement,
      'animation-name',
      'hidden'
    );
  }

  openText() {
    let element = this.Mcontent.nativeElement;
    setTimeout(() => {
      this.abstracte.setStyle(element, 'display', 'inherit');
    }, 600);
  }

  //carrusel

  @ViewChild('FirstImg') pos!: ElementRef;

  fotos: Array<string> = [];

  actualPos: number = 0;

  public next() {
    if (this.actualPos < this.fotos.length - 1) {
      this.actualPos += 1;
    } else {
      this.actualPos = 0;
    }

    this.abstracte.setStyle(
      this.pos.nativeElement,
      'margin-left',
      `${-100 * this.actualPos}%`
    );
  }

  public before() {
    if (this.actualPos > 0) {
      console.log('a');
      this.actualPos -= 1;
    } else {
      this.actualPos = this.fotos.length - 1;
      console.log('b');
    }

    this.abstracte.setStyle(
      this.pos.nativeElement,
      'margin-left',
      `${-100 * this.actualPos}%`
    );
  }

  //tecnologias

  tecnos:Array<Array<string>>=[];

  ngOnInit(): void {
    this.fotos=this.Minfo.url;
    this.tecnos=this.Minfo.tecnologias;
  }
}
