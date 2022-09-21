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

  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private log: LoginService, private router:Router) {}

  ngOnInit(): void {
    this.title();
  }

  public switch() {
    this.estado == true ? (this.estado = false) : (this.estado = true);
  }

  @HostListener('window:scroll', ['$event'])
  tempo(e: any): void {
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

  login() {
    this.router.navigate(['/', 'login']);
  }

  //login btn
  logged: boolean = this.log.$login.valueOf();

  value: string = 'Login';

  private title() {
    this.logged == false ? (this.value = 'logIn') : (this.value = 'logOut');
  }
}
