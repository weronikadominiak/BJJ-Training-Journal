import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Post } from './post.model';


@Injectable()
export class PostService {
  newPost = new Subject<any>();
  myList: Post[] = [];

  constructor(
  ) { }

  addPost(post) {
    this.myList.push(post);
    this.newPost.next(this.myList.slice());
  }

  indexOf(post) {
    return this.myList.indexOf(post);
  }

  editPost(post, change) {
    this.myList[post] = change;
    this.newPost.next(this.myList.slice());
  }

  setPosts(posts: Post[]) {
    this.myList = posts;
    this.newPost.next(this.myList.slice());
  }

  getPosts() {
    return this.myList;
  }

  getPost(id) {
    return this.myList[id];
  }

  removePost(id) {
    this.myList.splice(id, 1);
    this.newPost.next(this.myList.slice());
  }

}
