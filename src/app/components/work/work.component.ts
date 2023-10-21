import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Work } from 'src/app/models/work';
import { SharedService } from '../shared.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements AfterViewInit {
  experiences!: Work[];
  projects!: Work[];

  @ViewChild('shiftedContainer', { read: ElementRef })
  shiftedContainer!: ElementRef;

  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {
    this.experiences = sharedService.getWorkDetails();
    this.projects = sharedService.getProjectDetails();
  }

  ngAfterViewInit(): void {
    const height = this.sharedService.getHeaderHeight();
    console.log(842 / window.innerHeight);
    this.renderer.setStyle(
      this.shiftedContainer.nativeElement,
      'margin-top',
      `${height * (7 * (842 / window.innerHeight))}px`
    );
  }

  experienceClick(experience: Work): void {
    window.open(experience.url, '_blank');
  }

  skillToImage(skillName: string): string {
    const name = skillName
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('#', 'sharp')
      .replaceAll('.', 'dot');
    return `assets/images/skills/${name}-logo.png`;
  }
}
