import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "../core/services/main.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private mainService : MainService) { }

  ngOnInit(){
    this.mainService.headerColor.next(true);
  }
  ngOnDestroy(){
    this.mainService.headerColor.next(false);
  }
}
