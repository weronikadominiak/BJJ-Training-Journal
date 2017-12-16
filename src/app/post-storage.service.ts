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
    return [...this.myPosts];
  }

  post(post) {
    console.log(this.myPosts);
    this.myPosts.push(post);
    console.log(post);
    console.log(this.myPosts);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.myPosts));
    return this.get();
  }

  private findItemIndex(post) {
    return this.myPosts.indexOf(post);
  }

  put(item, changes) {
    Object.assign(this.myPosts[this.findItemIndex(item)], changes);
    return this.update();
  }

  destroy(item) {
    this.myPosts.splice(this.findItemIndex(item), 1);
    return this.update();
  }



}
