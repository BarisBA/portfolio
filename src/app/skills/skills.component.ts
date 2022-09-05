import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  showSkills = false;
  @ViewChild('skills') divSkills!: ElementRef;

  images = [
    'java script.png', 'angular.png', 'Group 205.png',
    'Group 226.png', 'Git-Icon-1788C 2.png', 'Group 20.png',
    'icons8-rest-api-80 2.png', 'icons8-test-lab-96 2.png', 'icons8-database-52 2.png',
  ];
  skillLanguages = [
    'Javascript', 'Angular', 'HTML / CSS',
    'SCRUM', 'Git', 'Design Thinking',
    'Rest API', 'Test', 'Databases',
  ];

  ngOnInit(): void {

  }
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    //  Captures / defines current window height when called
    const windowHeight = window.innerHeight;
    //  Captures bounding rectangle of the div #skills
    const boundingRectSkills = this.divSkills.nativeElement.getBoundingClientRect();
    //  IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
    // AND IF the bottom of the element is less than or = to viewport height
    if (boundingRectSkills.top >= 0 && boundingRectSkills.bottom <= windowHeight) {
       this.showSkills = true;
    } 
  }
  /*
    @HostListener('window:scroll', ['$event']) // for window scroll events
    onScroll(event) {
      document.getElementById('skill').classList.add('fadeIn');
  }*/
}
