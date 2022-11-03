import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SendMailComponent } from '../send-mail/send-mail.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showForm = false;
  @ViewChild('contactForm') divContactForm!: ElementRef;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  async sendMail(myForm: NgForm) {
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', mailField.value);
    fd.append('message', messageField.value);

    await fetch('https://baris-aslan.de/portfolio/assets/send_mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
    
    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;

    this._router.navigateByUrl('/send-mail')
  }

  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
    //  Captures / defines current window height when called                           routerLink="/send-mail"
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
