import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
navIsFixed = '';
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [ ])

  onWindowScroll(){
    const number = window.pageYOffset ||
      document.body.scrollTop || 0;
    if (number > 50) {
      this.navIsFixed = 'fixed';
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = '';
    }
  }
}
