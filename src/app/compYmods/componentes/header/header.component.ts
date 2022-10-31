import { LoginService } from './../../servicios/loginSv/login.service';
import {
  Component,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  estado: boolean = true;
  pos: boolean = true;
  isLogged = false;
 

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private lgsv: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.hasLogged();
    this.posCheck();
  }

  public switch() {
    this.estado == true ? (this.estado = false) : (this.estado = true);
  }

  @HostListener('window:scroll', ['$event'])
  tempo(): void {
    this.posCheck()
  }

  posCheck(){
    let posUser: number = window.pageYOffset;
    if (posUser > 0) {
      this.pos = false;
    } else if (posUser == 0) {
      this.pos = true;
    }
  }

  goTo(nombre: string) {
    this.newItemEvent.emit(nombre);
  }

  logIn(){
    this.router.navigate(['/login'])
  }

  logOut(){
    this.lgsv.logOut();
  }

  //login btn

  hasLogged(): void {
    if(this.lgsv.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
