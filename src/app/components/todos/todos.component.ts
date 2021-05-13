import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Make bed',
        priority: 'Low',
        completed: false
      },
      {
        content: 'Meditate',
        priority: 'High',
        completed: false
      },
    ]

  }

  toggleDone (id: number) {
    this.todos.map((todo, i) => {
      if (i == id) todo.completed = !todo.completed;
      this.addFinishDate();
      return todo;
    })
  }

  addTodo () {
    console.log("added, yay!");

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

  filterTodos () {

  }

  addFinishDate() {

  }

}
