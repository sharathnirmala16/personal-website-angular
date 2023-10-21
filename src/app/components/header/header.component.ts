import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  showFullName: boolean = false;

  @ViewChild('navBar') navBar!: ElementRef;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngAfterViewInit(): void {
    this.sharedService.setHeaderHeight(this.navBar.nativeElement.clientHeight);
  }

  homeButton(): void {
    this.router.navigate(['']);
  }

  projectsButton(): void {
    this.router.navigate(['work']);
  }

  contactButton(): void {
    this.router.navigate(['contact']);
  }

  nameMouseEnter(): void {
    this.showFullName = true;
  }

  nameMouseLeave(): void {
    this.showFullName = false;
  }

  downloadResume(): void {
    window.open(
      'https://drive.google.com/file/d/17MfRZDVvYXZmQJxVn5dJezfNIhT7o9p2/view?usp=share_link',
      '_blank'
    );
  }
}
