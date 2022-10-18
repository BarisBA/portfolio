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

  screenshotsAll = ['elpollolocco.png', 'Join.png', 'portfolioPic.png', 'ringoffire.jpg'];
  screenshotsJavascript = ['elpollolocco.png', 'Join.png'];
  screenshotsAngular = ['portfolioPic.png', 'ringoffire.jpg'];

  hoverTextAll = ['A 2D Jump´n Run game created with javascript', 'Kanban Board', 'This portfolio was created with Angular', 'Ring of Fire game created with Angular'];
  hoverTextJs = ['A 2D Jump´n Run game created with javascript', 'Kanban Board'];
  hoverTextAngular = ['This portfolio was created with Angular', 'Ring of Fire game created with Angular'];

  allProjects = ['el_pollo_locco', 'join', 'portfolio', 'ringoffire'];
  angularProjects = ['portfolio', 'ringoffire'];
  jsProjects = ['el_pollo_locco', 'join'];

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

  goToLinkAtAllProjects(index) {
    window.open(`https://baris-aslan.de/${this.allProjects[index]}`, "_blank");
  }

  goToLinkAtAngular(index) {
    window.open(`https://baris-aslan.de/${this.angularProjects[index]}`, "_blank");
  }

  goToLinkAtJs(index) {
    window.open(`https://baris-aslan.de/${this.jsProjects[index]}`, "_blank");
  }
}
