import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  languages = ['All','Angular', 'Javascript'];
  screenshots = ['startscreen_1.png','Join.png','startscreen_1.png','Join.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
