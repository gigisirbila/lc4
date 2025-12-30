import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponents } from './todo-components/todo-components';
import { RandomTodoComponent } from './random-todo/random-todo';
import { CounterTodo } from './counter-todo/counter-todo';

@Component({
  selector: 'app-root',
  imports: [TodoComponents, RandomTodoComponent, CounterTodo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lc4');
}
