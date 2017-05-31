import { Component, OnInit } from '@angular/core';
import { TodoService } from "app/shared/services/todo.service";
import { PostService } from "app/shared/services/post.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  todos: Array<any> = [];
  posts: Array<any> = [];

  posts2: Observable<any>;

  date = new Date();
  constructor(private todoService: TodoService, private postService: PostService) {
    // method 1
    this.postService.getPost().subscribe((data) => this.posts = data, (err) => { console.log('Error Handled at componenet', err); });
    this.posts2 = this.postService.getPost();

  }

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

}
