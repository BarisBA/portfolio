import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  showWork = false;
  showAll = true;
  showJavascript = false;
  showAngular = false;
  hover = {};
  @ViewChild('work') divWork!: ElementRef;

  screenshotsAll = ['elpollolocco.png','Join.png','portfolioPic.png','ringoffire.jpg'];
  screenshotsJavascript = ['elpollolocco.png','Join.png'];
  screenshotsAngular = ['portfolioPic.png','ringoffire.jpg'];

  hoverTextAll = ['A 2D Jump´n Run game created with javascript', 'Kanban Board','This portfolio was created with Angular', 'Ring of Fire game created with Angular'];
  hoverTextJs = ['A 2D Jump´n Run game created with javascript', 'Kanban Board'];
  hoverTextAngular = ['This portfolio was created with Angular', 'Ring of Fire game created with Angular'];

  project = ['el_pollo_locco/index.html','Gruppenarbeit-Join/index.html','portfolio/index.html','ringoffire/index.html']; 
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showAllWork() {
    this.showAll = true;
    this.showJavascript = false;
    this.showAngular = false;
  }

  showAngularWork() {
    this.showAll = false;
    this.showJavascript = false;
    this.showAngular = true;
  }

  showJavascriptWork() {
    this.showAll = false;
    this.showAngular = false;
    this.showJavascript = true;
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    const windowHeight = window.innerHeight;
    const boundingRectWork = this.divWork.nativeElement.getBoundingClientRect();

    if (boundingRectWork.top >= 0 && boundingRectWork.bottom <= windowHeight) {
       this.showWork = true;
    } 
  }

  goToLink(index) {
    window.open(`https://baris-aslan.developerakademie.net/${this.project[index]}`, "_blank");
  }
}
