import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list/todo-list.component';
import { ToDoListModule } from './todo-list/todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToDoListModule,
    DragDropModule
  ],

  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
