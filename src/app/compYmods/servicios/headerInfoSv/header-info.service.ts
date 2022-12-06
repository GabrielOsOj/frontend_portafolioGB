import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class HeaderInfoService {
  constructor() {}

  $expInfo: BehaviorSubject<boolean> = new BehaviorSubject(false);
  $estInfo: BehaviorSubject<boolean> = new BehaviorSubject(false);
  $proyInfo: BehaviorSubject<boolean> = new BehaviorSubject(false);
  $skillInfo: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
