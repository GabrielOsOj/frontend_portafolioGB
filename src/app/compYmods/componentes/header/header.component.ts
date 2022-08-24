import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  estado:boolean=true;
  pos:boolean=true;

  @Output() newItemEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  public switch(){
     (this.estado==true)?this.estado=false:this.estado=true;
  }


  @HostListener('window:scroll', ['$event'])
  tempo(e:any): void {
    let posUser:number=window.pageYOffset;
    if(posUser>0){
      this.pos=false;
    }
    else if(posUser==0){
      this.pos=true
    }
  }

  goTo(nombre:string){
    this.newItemEvent.emit(nombre);
  }

}
