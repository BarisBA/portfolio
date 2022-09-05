import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  showJourney = false;
  @ViewChild('journey') divJourney!: ElementRef;

  journeys = [
    'My journey began at school where i first came in contact with informatics.',
    'At some point after school i missed my informatics courses and realised that is my passion and what i want to do in my future',
    'I was looking for a way to learn web development and came a cross with the Developer Akademie.',
    'In the future i want to use everything what i learned as a frontend developer and at some point i like to learn program big games'
];
  images = ['walk-line.png','heart-line.png','search-line.png','flight-takeoff-line.png'];
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    //  Captures / defines current window height when called
    const windowHeight = window.innerHeight;
    //  Captures bounding rectangle of the div #skills
    const boundingRectJourney = this.divJourney.nativeElement.getBoundingClientRect();
    //  IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
    // AND IF the bottom of the element is less than or = to viewport height
    if (boundingRectJourney.top >= 0 && boundingRectJourney.bottom <= windowHeight) {
       this.showJourney = true;
    } 
  }
}
