import { Component, EventEmitter, Output,ChangeDetectorRef } from '@angular/core';
import { Task } from 'src/app/models/Task';
import{ CdkDragDrop, moveItemInArray }from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private changeDetectorRef: ChangeDetectorRef){

  }
  taskList:Task[] = []


  //Drag and drop handler

  drop(event:CdkDragDrop<any[]>){
    console.log(event);

    moveItemInArray(this.taskList,event.previousIndex,event.currentIndex)
    this.changeDetectorRef.markForCheck();
  }

  //Task List operations

  addTaskToList(value:any){
    let newTask:Task = new Task()
        newTask = {
                    id:this.generateId() ,
                    description:value.target.value,
                    checked:false
                  }
    this.taskList.push(newTask)
    console.log(this.taskList);

  }

  removeTask(id:number){
   let deleteItem:any =  this.taskList.find((a)=>a.id === id)
   this.taskList.slice(this.taskList.indexOf(deleteItem),1)
  }

  updateTask(){

  }

  activeALL(){

  }

  removeAllCompleted(){

  }







  generateId(){
    let random = Math.random() * Math.random() * 3
    let id = 2 * random
    return id
  }











}
