import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  
  taskList:Task[] = []

  


  addTaskToList(value:any){
    let newTask:Task = {
                        id:this.generateId(),
                        description:value.target.value
                      }
    this.taskList.push(newTask)
  }

  generateId(){
    let random = Math.random() * Math.random() * 5
    let id = 2 * random
    return id
  }





  
  




}
