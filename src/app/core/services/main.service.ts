import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainService {

  headerColor = new Subject<boolean>();

  constructor() { }
}
