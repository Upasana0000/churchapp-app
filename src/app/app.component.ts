import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' }, // Add Home page here
    { title: 'About us', url: '/aboutus', icon: 'heart' },
    { title: 'Events', url: '/events', icon: 'calendar' },
    { title: 'Core Values', url: '/values', icon: 'book' },
    { title: 'Disciples', url: '/desciples', icon: 'people' },
    { title: 'Community Life', url: '/community', icon: 'people' },
    { title: 'Newsletter', url: '/newsletter', icon: 'mail' },
    { title: 'Contact us', url: '/contactus', icon: 'location' },
  ];

  public labels = [];

  constructor() {}
}



