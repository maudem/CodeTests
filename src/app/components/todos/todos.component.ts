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
        priority: 'Medium',
        completed: false
      },
    ]

  }

}
