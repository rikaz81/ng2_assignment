import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Post {
  title: string;
  description: string;
}


@Injectable()
export class PostService {

  constructor(private http: Http) { }


  getPost() {
    //https://jsonplaceholder.typicode.com/
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: this.getHeader() }).map((response) => {
      console.log(response.json());
      // return response.json();
      let posts = response.json().map((item) => {
        let post: Post = <Post>{};
        post.title = item.title;
        post.description = item.body;

        return post;
      });
      return posts;
    }).catch((data) => {
      console.log("ERROR @ Service", data);
      return Observable.throw(data);
    });
  }

  savePost() {
    // return this.http.post('ur URL',{title:'abc'}).map((response)=>{
    //       return response.json();
    // });
  }

  getHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
}
