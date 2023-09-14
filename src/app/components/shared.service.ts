import { Injectable } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getContactDetails(): ContactDetails[] {
    return [
      new ContactDetails(
        'Gmail',
        'mail.google.com',
        'sharathnimala@gmail.com',
        '../../assets/images/gmail-logo.png'
      ),
      new ContactDetails(
        'LinkedIn',
        'https://www.linkedin.com/in/snirmala20/',
        'Sharath Nirmala',
        '../../assets/images/linkedin-logo.png'
      ),
      new ContactDetails(
        'GitHub',
        'https://github.com/sharathnirmala16',
        'sharathnirmala16',
        '../../assets/images/github-logo.png'
      ),
    ];
  }

  getWorkDetails(): Work[] {
    return [
      new Work(
        'Fidelity Investments',
        `I worked as Software Engineer in the Internal Applications team. During the two month internship period, I worked on developing webpages for the Candidate Lifecycle Management application which will be used by the HR team `,
        ['Angular', 'JIRA', 'Git'],
        '',
        'Bengaluru, India',
        'Jul 2023 - Sep 2023',
        '../../assets/images/fidelity-logo.png'
      ),
    ];
  }
}
