import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  nameHidden = true;

  constructor (private router: Router) { }

  homeButton() {
    this.router.navigate(['']);
  }

  projectsButton() {
    this.router.navigate(['projects']);
  }

  nameMouseEnter() {
    this.nameHidden = false;
  }

  nameMouseLeave() {
    this.nameHidden = true;
  }
}
