import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  aboutQuestion1: boolean = false;
  aboutQuestion2: boolean = false;
  aboutQuestion3: boolean = false;
  aboutQuestion4: boolean = false;
  
  showDetails1(): void {
    this.aboutQuestion1 = true;
  }
  hideDetails1(): void {
    this.aboutQuestion1 = false;
  }
  showDetails2(): void {
    this.aboutQuestion2 = true;
  }
  hideDetails2(): void {
    this.aboutQuestion2 = false;
  }
  showDetails3(): void {
    this.aboutQuestion3 = true;
  }
  hideDetails3(): void {
    this.aboutQuestion3 = false;
  }
  showDetails4(): void {
    this.aboutQuestion4 = true;
  }
  hideDetails4(): void {
    this.aboutQuestion4 = false;
  }


}
