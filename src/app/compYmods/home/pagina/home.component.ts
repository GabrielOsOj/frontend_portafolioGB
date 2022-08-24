import { discardPeriodicTasks } from '@angular/core/testing';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  contieneEv: Array<ElementRef> = [];

  ngOnInit(): void {}


  get(cos: string) {
     document.getElementById(cos)?.scrollIntoView();

     window.scrollTo(0,window.pageYOffset-113)

  }
}
