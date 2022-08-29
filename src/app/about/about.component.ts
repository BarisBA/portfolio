import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  journeys = [
    'My journey began',
    'My journey began',
    'My journey began',
    'My journey began'
];
  images = ['walk-line.png','heart-line.png','search-line.png','flight-takeoff-line.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
