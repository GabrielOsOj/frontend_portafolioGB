import { HeaderInfoService } from './../../servicios/headerInfoSv/header-info.service';
import { SkillsInterface } from './../../../Interfaces/skill-interface';
import { Component, Input, OnInit } from '@angular/core';
import { SkillSvService } from '../../servicios/skillSv/skill-sv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  resSkillArr: Array<SkillsInterface> = [];

  @Input() isLogged: boolean = false;

  constructor(
    private resSkills: SkillSvService,
    private HI: HeaderInfoService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.resSkills.$resSkill.subscribe({
      next: (r: any) => {
        this.resSkillArr = r;
        this.HI.$skillInfo.next(this.resSkillArr.length != 0);
      },
    });
  }
}
