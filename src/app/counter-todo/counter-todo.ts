import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { TodosService } from '../services/todo';
import { CounterStore } from './counter.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-todo',
  imports: [CommonModule],
  templateUrl: './counter-todo.html',
  styleUrl: './counter-todo.css',
})
export class CounterTodo {
  counter$;
  todo$;
  constructor(private counterStore: CounterStore, private todosService: TodosService) {
    this.todo$ = this.counterStore.counter$.pipe(
      switchMap((id) => this.todosService.getTodoById(id))
    );

    this.counter$ = this.counterStore.counter$;
  }

  increment() {
    this.counterStore.increment();
  }

  decrement() {
    this.counterStore.decrement();
  }
}
