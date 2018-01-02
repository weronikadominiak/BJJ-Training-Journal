import { Injectable } from '@angular/core';
import { Post } from './post.model';

const storageName = 'myPosts';
const defaultList = [  {}];
const idList =  'idList';

@Injectable()
export class PostStorageService {
  private myPosts = [];
  private idList = [];

  constructor() {
    this.myPosts = JSON.parse(localStorage.getItem(storageName)) || [];
    this.idList = JSON.parse(localStorage.getItem(idList)) || [];
   }

  get() {
    return [...this.myPosts.slice()].reverse();
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

  // Obdsługa UID

  getId() {
    return [...this.idList];

  }

  postId(id) {
    this.idList.push(id);
    return this.updateId();
  }

  private updateId() {
    localStorage.setItem(idList, JSON.stringify(this.idList));
    return this.getId();
  }

}
