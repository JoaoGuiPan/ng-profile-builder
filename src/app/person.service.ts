import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personData = new BehaviorSubject({});
  currentPersonData = this.personData.asObservable();

  constructor() {
  }

  changePersonData(data: any) {
    this.personData.next(data);
  }
}
