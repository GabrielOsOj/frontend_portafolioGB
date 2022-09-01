import { SkillsInterface } from './../../../Interfaces/skill-interface';
import { Component, OnInit } from '@angular/core';
import { SkillSvService } from '../../servicios/skillSv/skill-sv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  resSkillArr: Array<SkillsInterface> = [];

  constructor(private resSkills: SkillSvService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.resSkills.$resSkill.subscribe({
      next: (r) => {
        this.resSkillArr = r;
      }
    });
  }
}
