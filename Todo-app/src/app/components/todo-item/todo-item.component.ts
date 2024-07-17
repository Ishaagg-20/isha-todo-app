import { TodoModel } from './../../providers/todos.states';
import { Component , OnInit, Input } from '@angular/core';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent implements OnInit {
  @Input() todo?:TodoModel;
  editTodo: boolean = false;

 constructor() { }

 ngOnInit(): void {
     
 }

 updateToggle(){
  this.editTodo = !this.editTodo;
 }
 updateTodo(){

 }
 deleteTodo(){
  
 }
}
