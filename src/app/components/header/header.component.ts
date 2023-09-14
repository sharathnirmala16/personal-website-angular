import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showFullName: boolean = false;

  constructor(private router: Router) {}

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
}
