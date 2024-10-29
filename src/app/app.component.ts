import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' }, // Add Home page here
    { title: 'About us', url: '/folder/aboutUs', icon: 'heart' },
    { title: 'Vission and Mission', url: '/folder/Ourvissionandmissions', icon: 'book' },
    { title: 'Core Values', url: '/folder/values', icon: 'book' },
    { title: 'Disciples', url: '/folder/desciples', icon: 'people' },
    { title: 'Community Life', url: '/folder/community', icon: 'people' },
    { title: 'Contact us', url: '/folder/contactus', icon: 'mail' },
  ];

  public labels = [];

  constructor() {}
}

