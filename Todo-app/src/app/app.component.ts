import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoInputComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
