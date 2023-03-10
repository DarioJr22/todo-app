import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { TodoListComponent } from './todo-list.component';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,

  ],
  exports:[TodoListComponent],
  providers: [],
  bootstrap: []
})
export class ToDoListModule { }
