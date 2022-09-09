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
  hover = {};
  @ViewChild('work') divWork!: ElementRef;

  screenshotsAll = ['startscreen_1.png','Join.png','startscreen_1.png','Join.png'];
  screenshotsJavascript = ['startscreen_1.png','Join.png'];
  hoverTextAll = ['A 2D Jump´n Run game created with javascript', 'Kanban Board','El Pollo Locco', 'Join']
  hoverTextJs = ['A 2D Jump´n Run game created with javascript', 'Kanban Board']
  project = ['el_pollo_locco/index.html','Gruppenarbeit-Join/index.html','el_pollo_locco/index.html','Gruppenarbeit-Join/index.html']; 
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showAllWork() {
    this.showAll = true;
    this.showJavascript = false;
  }

  showAngularWork() {

  }

  showJavascriptWork() {
    this.showAll = false;
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
