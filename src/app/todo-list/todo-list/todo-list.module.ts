import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { TodoListComponent } from './todo-list.component';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule

  ],
  exports:[TodoListComponent],
  providers: [],
  bootstrap: []
})
export class ToDoListModule { }
