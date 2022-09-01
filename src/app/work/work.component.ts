import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  screenshotsAll = ['startscreen_1.png','Join.png','startscreen_1.png','Join.png'];
  screenshotsJavascript = ['startscreen_1.png','Join.png'];
  showAll = true;
  showJavascript = false;
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
}
