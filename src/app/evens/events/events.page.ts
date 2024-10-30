import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage {
  // Sample list of church events
  events = [
    { title: 'Sunday Worship Service', description: 'Join us for Sunday Worship and Prayer.', date: '2024-11-03' },
    { title: 'Bible Study', description: 'Bible study session led by Pastor John.', date: '2024-11-07' },
    { title: 'Youth Fellowship', description: 'A special meeting for the youth of our church.', date: '2024-11-10' },
    { title: 'Christmas Choir Practice', description: 'Practice for the upcoming Christmas service.', date: '2024-11-15' },
  ];

  constructor() {}
}
