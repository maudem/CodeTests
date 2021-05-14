import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  newTodo:string = '';
  newDoneDate: string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Make bed',
        priority: 'Low',
        completed: false,
        dateCompleted: '',
        showDate: false
      },
      {
        content: 'Meditate',
        priority: 'High',
        completed: false,
        dateCompleted: '',
        showDate: false
      },
    ]

  }

  addTodo () {

    if(this.newTodo) {
       this.todos.push({
        content: this.newTodo,
        priority: 'Low',
        completed: false,
        dateCompleted: '',
        showDate: false
      });
    }
    this.newTodo = '';
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter((value, i) => i != id);
  }

  setPriority (todo: any) {
    // rewrite
    let option;
    switch(todo.priority){
      case 'Low' :
        option = 'Medium';
        break;
      case 'Medium' :
        option = 'High';
        break;
      case 'High' :
        option = 'Low';
        break;
      default:
        option = 'Low';
    }
    return todo.priority = option

  }

  addFinishDate(todo:any) {
    todo.completed = true
    todo.showDate = false;
  }

  todoStatus(todo:any, id:number) {
    if(todo.completed) {
      todo.completed = false;
    } else {
      todo.showDate = true;
      this.addFinishDate;
    }
  }

}
