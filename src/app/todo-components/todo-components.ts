import { Component } from '@angular/core';
import { TodosService } from '../services/todo';
import { map } from 'rxjs/internal/operators/map';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-components',
  imports: [CommonModule],
  templateUrl: './todo-components.html',
  styleUrl: './todo-components.css',
})
export class TodoComponents {
  eventTodos$: Observable<any[]>;
  constructor(private todosService: TodosService) {
    this.eventTodos$ = this.todosService
      .getTodos()
      .pipe(map((todos) => todos.filter((todo) => todo.id % 2 === 0)));
  }
}
