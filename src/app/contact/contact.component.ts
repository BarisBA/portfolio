import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
  validateForm() {
    document.forms['form']['name'].value;
    document.forms['form']['email'].value;
    document.forms['form']['message'].value;
}*/
}
