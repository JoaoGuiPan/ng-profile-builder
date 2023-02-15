import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  
  @Input()
  name = '';

  favoriteColor = 'black';

  showJobTitle = false;

  jobTitle = '';

  jobExperiences: string[] = [];

  showJobExperiences = false;

  newJobExperience = '';

  addJobExperienceRow = false;

  @Output()
  jobTitleChange = new EventEmitter();

  @Output()
  jobExperiencesChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  saveJobExperience() {
    this.jobExperiences.push(this.newJobExperience);
    this.newJobExperience = '';
    this.addJobExperienceRow = false;
    this.jobExperiencesChange.emit(this.jobExperiences);
  }
}
