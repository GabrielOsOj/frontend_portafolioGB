import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-skill',
  templateUrl: './plant-skill.component.html',
  styleUrls: ['./plant-skill.component.css'],
})
export class PlantSkillComponent implements OnInit {
  ToF: Array<boolean> = [];

  @Input() rango: number = 0;
  @Input() skill: string = '';

  constructor() {}

  ngOnInit(): void {
    this.valor(this.rango);
  }

  valor(val: number) {
    let numero = this.filtroVal(val);

    for (let i = 10; i <= 100; i += 10) {
      if (numero >= i) {
        this.ToF.push(true);
      } else {
        this.ToF.push(false);
      }
    }
  }

  filtroVal(val: number): number {
    if (val >= 101) {
      return 100;
    } else if (val <= -1) {
      return 0;
    }

    return val;
  }
}
