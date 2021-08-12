import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {MainService} from "./core/services/main.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  openMenu = '';
  navIsFixed: '';
  checker = false;
  headerColor: boolean;
  selectedMenu: string;

  constructor(private mainService : MainService){
  }
  ngAfterViewInit(){
    this.mainService.headerColor
      .pipe(delay(100))
      .subscribe(res => this.headerColor = res);
  }

  showMegaMenu(menu:string){
    if (this.selectedMenu !== menu){
      this.selectedMenu = menu;
    } else{
      this.selectedMenu = '';
    }
  }

  showMenu() {
  if (this.openMenu == '') {
    this.openMenu = 'open';
  } else {
    this.openMenu = '';
  }
}


teleport(event : Event) {
  let target = event.target;
  let elem = event.target as HTMLElement;
  this.checker = elem.tagName === 'A'|| elem.tagName === 'SPAN' || elem.tagName === 'PATH';

  if (this.checker){
    this.openMenu = '';
    this.selectedMenu = '';
  }
}

  @HostListener('window:scroll', [ ])

  onWindowScroll(){
    const number = window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop || 0;
    if (number > 75) {
      // @ts-ignore
      this.navIsFixed = 'fixed';
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = '';
    }
  }

}
