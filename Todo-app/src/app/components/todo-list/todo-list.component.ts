import { TodoModel } from './../../providers/todos.states';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { todosSelector } from '../../providers/todos.reducers';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  imports: [CommonModule, TodoItemComponent],
 
})
export class TodoListComponent implements OnInit {
  todos:TodoModel[] = [];

  constructor( private store: Store) { }

  ngOnInit(): void {
    this.loadTodos();
    }
    loadTodos() {
       this.store.select(todosSelector).subscribe((state) => this.todos = state);
       console.log("ToDos : ", this.todos);
    }
}




