import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showForm = false;
  @ViewChild('contactForm') divContactForm!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    //  Captures / defines current window height when called
    const windowHeight = window.innerHeight;
    //  Captures bounding rectangle of the div #skills
    const boundingRectContactForm = this.divContactForm.nativeElement.getBoundingClientRect();
    //  IF the top of the element is greater or = to 0 (it's not ABOVE the viewport)
    // AND IF the bottom of the element is less than or = to viewport height
    if (boundingRectContactForm.top >= 0 && boundingRectContactForm.bottom <= windowHeight) {
       this.showForm = true;
    } 
  }
}
