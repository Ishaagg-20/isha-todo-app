import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoModel } from '../../providers/todos.states';
import { actions } from '../../providers/todos.actions';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss',
})
export class TodoInputComponent {
  title: string = '';

  constructor(private store: Store) {}

  public addToDo() {
    var todoModel: TodoModel = {
      id: 1,
      title: 'Bhavya',
      completed: true,
    };

    this.store.dispatch(actions.addTodoAction(todoModel));
  }
}
