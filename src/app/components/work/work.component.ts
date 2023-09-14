import { Component } from '@angular/core';
import { Work } from 'src/app/models/work';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  experiences!: Work[];

  constructor(sharedService: SharedService) {
    this.experiences = sharedService.getWorkDetails();
  }
}
