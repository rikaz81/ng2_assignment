import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos: Array<any> = [];

  constructor() { }

  addTodos(todo) {
    console.log('added');
    this.todos.push(todo);
      console.log('added done',this.todos);
  }
}
