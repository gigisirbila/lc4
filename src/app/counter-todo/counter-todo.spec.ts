import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterTodo } from './counter-todo';

describe('CounterTodo', () => {
  let component: CounterTodo;
  let fixture: ComponentFixture<CounterTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterTodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
