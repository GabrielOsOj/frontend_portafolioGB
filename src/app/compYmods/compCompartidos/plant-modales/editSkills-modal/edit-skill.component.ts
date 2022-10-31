import { EditDeleteCreateService } from './../../../servicios/edit-delete-createSv/edit-delete-create.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CrudService } from './../../../servicios/crudSv/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  constructor(
    private crud: CrudService,
    public EDCsv: EditDeleteCreateService
  ) {}
  nuevaSkill: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.iniciarForm()
  }

  nuevo() {
    this.crud.createSv("skills",this.nuevaSkill.value).subscribe();
    window.location.reload();
  }

  iniciarForm() {
    this.nuevaSkill = new FormGroup({
      titulo: new FormControl(""),
      nivel: new FormControl("")
    })
  }
}
