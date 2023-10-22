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
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements AfterViewInit {
  experiences!: Work[];
  projects!: Work[];
  skills!: string[];

  @ViewChild('shiftedContainer', { read: ElementRef })
  shiftedContainer!: ElementRef;

  constructor(
    private sharedService: SharedService,
    private renderer: Renderer2
  ) {
    this.experiences = sharedService.getWorkDetails();
    this.projects = sharedService.getProjectDetails();
    this.skills = this.sharedService.getSkills();
  }

  ngAfterViewInit(): void {
    const height = this.sharedService.getHeaderHeight();
    this.renderer.setStyle(
      this.shiftedContainer.nativeElement,
      'margin-top',
      `${height * (11 * (842 / window.innerHeight))}px`
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
