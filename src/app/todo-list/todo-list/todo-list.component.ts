import { Component, EventEmitter, Output,ChangeDetectorRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import{ CdkDragDrop, moveItemInArray }from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnChanges,OnInit{
  @Output()darkMode:EventEmitter<Boolean> = new EventEmitter<Boolean>()
  constructor(private cdr: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.initTheme()
  }
  //Coisas para estudar e documentar
  /*
  --------------Estudar-----------------------
  - [ ] Uso do CDK drag and drop
  - [ ] Uso de view Childs
  - [ ] aot
  - [ ] Funcionamento de modules com angular
  - [ ] Funcionamento de ngModel pra capturar eventos
  - [ ] Splice altera o indece ?
  - [ ] Como que edita um css de um check box ?
  --------------PENDENCIAS---------------------
  - [X] Resolver o Update
  - [X] Resolver o Remove
  - [x] Resolver o All COMPLEET
  - [x] Resolver o Clear Compleet
  - [x] Resolver o [Quando estiver marcado, grifar a tarefa]

  - [X] Entender como fazer o modo dark / Fazer
  - [X] Entender como Estilizar o check box / Fazer
  - [X] Entender como plotar esse fundo metade metade / Fazer



  */

  taskList:Task[] = []

  //Changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

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
    value.target.value = ''
    console.log(this.taskList);

  }

  removeTask(id:number, idx?:number){
   if (idx) {
    this.taskList.splice(idx,1)
   }else{
    let deleteItem:any =  this.taskList.find((a)=>a.id === id)
    this.taskList.splice(this.taskList.indexOf(deleteItem),1)
   }

  }

  updateTask(id:number,updateT?:any){
    let updateItem:any =  this.taskList.find((a)=>a.id === id)
    console.log(this.taskList);
  }

  activeAll(){
    this.taskList.forEach((t)=> !t.checked ? t.checked = true : t.checked = t.checked)
    //Update the number of taks completed
    this.numberTaskCompleted()

  }

  removeAllCompleted(){
   for(let i = this.taskList.length-1 ; i>=0 ; i--){
      if(this.taskList[i].checked){
        this.removeTask(this.taskList[i].id, i)
      }
   }
    //Update the number of taks completed
    this.numberTaskCompleted()

    console.log(this.taskList);

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


  //Toggle dark Mode

  modeAppSrcIcon = './../../assets/images/icon-moon.svg'
  toggleDarkMode(){
    this.modeAppSrcIcon =
    this.modeAppSrcIcon ==
    '../../assets/images/icon-moon.svg' ?
    '../../assets/images/icon-sun.svg':
    '../../assets/images/icon-moon.svg'
    document.querySelector('body')?.classList.toggle('dark-mode')
   this.initTheme()
  }

  initTheme(){
    if(document.querySelector('body')?.classList.contains('dark-mode')){
      localStorage.setItem('color-scheme','dark')
      document.querySelector('body')?.classList.add('dark-mode')
      this.darkMode.emit(true)
    }else{
      localStorage.setItem('color-scheme','light')
      document.querySelector('body')?.classList.remove('dark-mode')
      this.darkMode.emit(false)
    }
  }











}
