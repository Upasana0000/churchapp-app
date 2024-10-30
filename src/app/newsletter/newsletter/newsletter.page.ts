import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage {
  subscriberName: string = '';
  subscriberEmail: string = '';
  showThankYou: boolean = false;

  constructor() {}

  subscribeToNewsletter() {
    if (this.subscriberName && this.subscriberEmail) {
      // Show thank-you message
      this.showThankYou = true;

      // Clear the input fields after successful subscription
      this.subscriberName = '';
      this.subscriberEmail = '';

      // Automatically hide the thank-you message after 5 seconds
      setTimeout(() => {
        this.showThankYou = false;
      }, 5000);
    }
  }
}
