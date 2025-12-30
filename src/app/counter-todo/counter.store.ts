import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CounterStore {
  private counterSubject = new BehaviorSubject<number>(1);
  counter$ = this.counterSubject.asObservable();

  increment() {
    this.counterSubject.next(this.counterSubject.value + 1);
  }

  decrement() {
    this.counterSubject.next(Math.max(1, this.counterSubject.value - 1));
  }
}
