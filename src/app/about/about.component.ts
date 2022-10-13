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
    'My journey began at school where I first came in contact with programming.',
    'At some point after school I missed my informatics course and realised that is what I love doing',
    'I was looking for a way to learn web development and came a cross with the Developer Akademie.',
    'In the future I want to use everything what I learned as a frontend developer and at some point i like to learn program bigger games'
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
