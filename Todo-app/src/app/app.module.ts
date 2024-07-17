import { NgModule } from "@angular/core";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from "@ngrx/store";
import {FormsModule} from '@angular/forms';
import { todoReducer } from "./providers/todos.reducers";
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'
bootstrapApplication(AppComponent);

// @NgModule({
//     imports: [
//       BrowserModule,
//       FormsModule,
//       // Add any other imports your application needs
//     ],
//     bootstrap: []  // No bootstrap array here since we're using bootstrapApplication in main.ts
//   })


@NgModule({
    declarations:[
        AppComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoInputComponent
],
imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
        "todos":todoReducer,
    })
],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }