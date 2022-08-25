import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  images = [
    'java script.png','angular.png','Group 205.png',
    'Group 226.png','Git-Icon-1788C 2.png','Group 20.png',
    'icons8-rest-api-80 2.png','icons8-test-lab-96 2.png','icons8-database-52 2',
  ];
  skills = [
  'Javascript','Angular','HTML / CSS',
  'SCRUM','Git','Design Thinking',
  'Rest API','Test','Databases',
];
  currentImage = 0;

  ngOnInit(): void {
    //this.allImages();
  }
/*
    allImages() {
      for (let i = 0; i < this.skills.length; i++) {
        document.getElementById('skillSection').innerHTML += this.templateSkills(i);
        //this.currentImage++;
      }
    }

    templateSkills(i) {
      return`
      <div class="skillSection-header">
        <div class="skillSection">
          <div class="skillImg">
            <div class="skillImg-child">
              <img src="./../../assets/img/${this.images[i]}">
            </div>
          </div>
            <p> ${this.skills[i]}</p>
        </div>
      </div>
      `;
    }*/
}
