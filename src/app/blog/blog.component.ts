import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "../core/services/main.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  constructor(private mainService : MainService) {
  }

  ngOnInit(){
    this.mainService.headerColor.next(true);
  }

  ngOnDestroy(){
    this.mainService.headerColor.next(false);
  }

}
