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

  constructor() { }

  ngOnInit(): void {
    //add 
    this.todos = []

  }

  toggleDone (id: number) {
    this.todos.map((todo, i) => {
      // ask do you want to add date with input

      // this.addFinishDate(todo);
      if (i == id) todo.completed = !todo.completed;
      
      return todo;
    })
  }

  addTodo () {

    if(this.newTodo) {
       this.todos.push({
        content: this.newTodo,
        priority: 'Low',
        completed: false,
        dateCompleted: ''
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

  // filterTodos () {

  // }

  // addFinishDate(todo) {
  //   //figure out how you want this to work
  //   // todo.dateCompleted
  // }

}
