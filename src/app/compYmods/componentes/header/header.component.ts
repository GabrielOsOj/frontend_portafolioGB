import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  estado:boolean=true;
  pos:boolean=true;

  constructor() { }

  ngOnInit(): void {
    
  }
  
  public switch(){
     (this.estado==true)?this.estado=false:this.estado=true;
  }


  @HostListener('window:scroll', ['$event'])
  tempo(e:any): void {
    console.log(window.pageYOffset);
    let posUser:number=window.pageYOffset;
    if(posUser>0){
      this.pos=false;
    }
    else if(posUser==0){
      this.pos=true
    }
  }


}
