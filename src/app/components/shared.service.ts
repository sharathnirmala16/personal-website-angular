import { Injectable } from '@angular/core';
import { ContactDetails } from '../models/contact-details';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  headerHeight!: number;

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
        'I worked as Software Engineer in the Internal Applications team. During the two month internship period, I worked on developing webpages for the Candidate Lifecycle Management application which will be used by the HR team during the onboarding process of new recruits.',
        ['TypeScript', 'Angular', 'JIRA', 'Git'],
        'https://drive.google.com/file/d/16KE-_qQZtTc6VuFVvKDa3UYMs-t8iwGp/view?usp=share_link',
        'Bengaluru, India',
        'Jul 2023 - Sep 2023',
        '../../assets/images/fidelity-logo.png'
      ),
    ];
  }

  getProjectDetails(): Work[] {
    return [
      new Work(
        'Forex Algorithmic Trading System',
        'Built a Django based web application that connects to MetaTrader5 to execute trading orders for forex currency pairs. It gives options to modify a few built-in technical strategies (experimental LSTM strategy also included), and backtest it for various currency pairs. Each backtest can be plotted for visualization. After successful backtest results, the strategy can be forward tested and deployed.',
        [
          'Python',
          'Django',
          'NumPy',
          'Pandas',
          'MetaTrader 5',
          'BootStrap 5',
          'TensorFlow',
        ],
        'https://github.com/sharathnirmala16/Forex-Algorithmic-Trading-System-MT5',
        'Mysuru, India',
        'Feb 2023 - Jun 2023',
        'assets/images/forex-logo.png'
      ),
      new Work(
        'Ampere',
        'Ampere is an application that provides laptop battery life and health information to a user in a neat GUI. The goal was to provide more in depth information relative to the data available in Windows PowerShell while also trying to estimate the health condition of the battery based on its charging and discharging behavior. It will also be able to give voice and visual alerts to the user.',
        [
          'C#',
          '.NET',
          'Windows Presentation Foundation',
          'Windows PowerShell',
          'XAML',
        ],
        'https://github.com/sharathnirmala16/Ampere',
        'Mysuru, India',
        'Apr 2022 - Jul 2022',
        'assets/images/ampere-logo.png'
      ),
      new Work(
        'Tomato Leaf Disease Detector',
        'This project was developed to demonstrate the effectiveness of Convolutional Neural Networks (CNNs) in detecting diseases afflicting a tomato plant based on images of the leaves. The CNN model was able to achieve 89% validation accuracy and was made accessible to users through a desktop application.',
        ['C#', '.NET', 'Python', 'TensorFlow'],
        'https://github.com/sharathnirmala16/TomatoLeafDiseaseDetector',
        'Mysuru, India',
        'Jan 2022 - Mar 2022',
        'assets/images/tomato-disease-logo.png'
      ),
    ];
  }

  setHeaderHeight(height: number): void {
    this.headerHeight = height;
  }

  getHeaderHeight(): number {
    return this.headerHeight;
  }
}
