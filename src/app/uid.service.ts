import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';


@Injectable()
export class UidService {
  id = [];

  constructor(
    // private storage: StorageService,
  ) {
    // storage.getId();
   }

  generateId() {
    if (this.id.length === 0) {
      this.id.push(1);
    } else {
      this.id.push((this.id[this.id.length - 1 ]) + 1);
    }
    // this.storage.postId();
    return this.id.length;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }
}
