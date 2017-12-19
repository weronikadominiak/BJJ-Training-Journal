import { Injectable } from '@angular/core';
import { Post } from './post.model';

const storageName = 'myPosts';
const defaultList = [
  { title: 'install NodeJS' },
];

@Injectable()
export class PostStorageService {
  private myPosts = [];

  constructor() {
    this.myPosts = JSON.parse(localStorage.getItem(storageName)) || [];
   }

  get() {
    return [...this.myPosts].reverse();
  }

  post(post) {
    this.myPosts.push(post);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.myPosts));
    return this.get();
  }

  private findItemIndex(post) {
    return this.myPosts.indexOf(post);
  }

  edit(post, changes) {
    Object.assign(this.myPosts[this.findItemIndex(post)], changes);
    return this.update();
  }

  destroy(post) {
    this.myPosts.splice(this.findItemIndex(post), 1);
    return this.update();
  }



}
