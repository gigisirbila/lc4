import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponents } from './todo-components';

describe('TodoComponents', () => {
  let component: TodoComponents;
  let fixture: ComponentFixture<TodoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
