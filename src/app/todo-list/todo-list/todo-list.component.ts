import { Component, EventEmitter, Output,ChangeDetectorRef } from '@angular/core';
import { Task } from 'src/app/models/Task';
import{ CdkDragDrop, moveItemInArray }from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor(private cdr: ChangeDetectorRef){

  }
  //Coisas para estudar e documentar
  /*
  --------------Estudar-----------------------
  - [ ] Uso do CDK drag and drop
  - [ ] Uso de view Childs
  - [ ] aot
  - [ ] Funcionamento de modules com angular
  --------------PENDENCIAS---------------------
  - [ ] Resolver o Update
  - [ ] Resolver o Remove
  - [ ] Resolver o All COMPLEET
  - [ ] Resolver o All COMPLEET
  - [ ] Resolver o Clear Compleet
  - [ ] Resolver o [Quando estiver marcado, grifar a tarefa]

  - [ ] Entender como fazer o modo dark / Fazer
  - [ ] Entender como Estilizar o check box / Fazer
  - [ ] Entender como plotar esse fundo metade metade / Fazer



  */

  taskList:Task[] = []


  //Drag and drop handler

  drop(event:CdkDragDrop<any[]>){
    console.log(event);
    moveItemInArray(this.taskList,event.previousIndex,event.currentIndex)
    this.cdr.markForCheck();
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
   this.taskList.splice(this.taskList.indexOf(deleteItem),1)
  }

  updateTask(id:number,updateT:any,check?:boolean){
    //Item á ser atualizado
    let updateitem:any = this.taskList.find((a)=> a.id === id)

    //Se for uma atualização do CheckBox
    if (check) {
      let update:Task = {
        id:id,
        checked:!updateT,
        description:updateitem.description
      }
      this.taskList.splice(this.taskList.indexOf(updateitem),1,update)
    }else{
      let update:Task = {
        id:id,
        checked:updateitem.checked,
        description:updateT
      }
      this.taskList.splice(this.taskList.indexOf(updateitem),1,update)
    }

    //Update the number of taks completed
    this.numberTaskCompleted()
    this.cdr.detectChanges()

  }

  activeAll(){
    this.taskList.forEach((t)=> !t.checked ? t.checked = true : t.checked = t.checked)
    //Update the number of taks completed
    this.numberTaskCompleted()

  }

  removeAllCompleted(){
    this.taskList.forEach((t)=> t.checked ? this.removeTask(t.id) : t.checked = t.checked)
    //Update the number of taks completed
    this.numberTaskCompleted()
  }

  numberTaskCompleted(){
    let numberOfTasksCompleted =  this.taskList.filter((t)=> t.checked == true)
    return numberOfTasksCompleted.length
  }

  //Atualiza o elemento manipulado no ts para o html






  generateId(){
    let random = Math.random() * Math.random() * 3
    let id = 2 * random
    return id
  }











}
