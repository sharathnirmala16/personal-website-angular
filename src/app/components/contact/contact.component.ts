import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ContactDetails } from 'src/app/models/contact-details';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  allContactDetails!: ContactDetails[];

  constructor(private sharedService: SharedService) {
    this.allContactDetails = this.sharedService.getContactDetails();
  }

  openLink(contact: ContactDetails): void {
    if (contact.siteName === 'Gmail') {
      window.open(`mailto:${contact.accName}`, '_blank');
    } else if (contact.siteName === 'LinkedIn') {
      window.open(contact.siteUrl, '_blank');
    } else if (contact.siteName === 'GitHub') {
      window.open(contact.siteUrl, '_blank');
    }
  }
}
