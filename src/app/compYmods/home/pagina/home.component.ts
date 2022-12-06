import { EditDeleteCreateService } from './../../servicios/edit-delete-createSv/edit-delete-create.service';
import { LoginService } from './../../servicios/loginSv/login.service';

import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private lgsv: LoginService,
    public editSv: EditDeleteCreateService
  ) {}

  isLogged = true;

  ngOnInit(): void {
    
    this.hasLogged();
    
  }
 
  hasLogged(): void {
    if (this.lgsv.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  get(cos: string) {
    document.getElementById(cos)?.scrollIntoView();

    window.scrollTo(0, window.pageYOffset - 113);
  }
}
