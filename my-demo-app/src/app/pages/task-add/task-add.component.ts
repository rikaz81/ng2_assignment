import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TodoService } from "app/shared/services/todo.service";


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor(private activated: ActivatedRoute, private todoService: TodoService, private router: Router) {
    //http://localhost:4200/taskview/17   ===> prints => 17
    this.activated.params.subscribe((data) => {
      console.log(data);
    });

    // http://localhost:4200/taskview/17284238?acd=ggg  ===> prints => acd,ggg
    this.activated.queryParams.subscribe((data) => {
      console.log('query params ', data);
    });


  }
  isUnsaved: boolean = false;

  todo: string = "";
  ngOnInit() {
  }
  public checkUnsaved() {
    return this.isUnsaved;
  }

  addTodo() {
    this.todoService.addTodos(this.todo);
    this.router.navigate(['/', 'tasklist']);
  }
}
