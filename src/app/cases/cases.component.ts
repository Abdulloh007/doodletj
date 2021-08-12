import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "../core/services/main.service";

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit, OnDestroy {



  constructor(private mainService : MainService) { }

  ngOnInit(){
    this.mainService.headerColor.next(true);
  }

  ngOnDestroy(){
    this.mainService.headerColor.next(false);
  }

}
