import { infMod } from './../../../Interfaces/infModal-interface';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-proyecto-tmp',
  templateUrl: './proyecto-tmp.component.html',
  styleUrls: ['./proyecto-tmp.component.css'],
})
export class ProyectoTmpComponent implements OnInit, AfterViewInit {
  @ViewChild('after') box1!: ElementRef;
  @ViewChild('textC') box2!: ElementRef;

  after!: ElementRef;
  textC!: ElementRef;

  @Input() info: infMod = {
    titulo: '',
    url: [],
    descripcion: '',
    tecnologias: [],
  };

  open: boolean = false;

  ngAfterViewInit(): void {
    this.after = this.box1.nativeElement;
    this.textC = this.box2.nativeElement;
  }

  constructor(private abstract: Renderer2) {}

  mouseIn() {
    this.abstract.setStyle(this.after, 'animation-name', 'afterIn');
    this.abstract.setStyle(this.textC, 'animation-name', 'textCin');
  }
  mouseOut() {
    this.abstract.setStyle(this.after, 'animation-name', 'afterOut');
    this.abstract.setStyle(this.textC, 'animation-name', 'textCout');
  }

  open_closed() {
    this.open == false ? (this.open = true) : (this.open = false);
  }

  closeFromMod($event: boolean) {
    setTimeout(() => {
      this.open = $event;
    }, 430);
  }

  ngOnInit(): void {
    console.log(this.info)
  }
}
