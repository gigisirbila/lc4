import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, Observable, switchMap } from 'rxjs';
import { TodosService } from '../services/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-todo',
  imports: [CommonModule],
  templateUrl: './random-todo.html',
  styleUrl: './random-todo.css',
})
export class RandomTodoComponent implements AfterViewInit {
  @ViewChild('btn', { static: true }) button!: ElementRef<HTMLButtonElement>;

  randomTodo$!: Observable<any>;

  constructor(private todosService: TodosService) {}

  ngAfterViewInit() {
    this.randomTodo$ = fromEvent(this.button.nativeElement, 'click').pipe(
      map(() => Math.floor(Math.random() * 200) + 1),
      switchMap((id) => this.todosService.getTodoById(id))
    );
  }
}
