import { Injectable } from '@angular/core';
import { PostStorageService } from './post-storage.service';

@Injectable()
export class UidService {
  id = [];

  constructor(
    private storageService: PostStorageService,
  ) {
    this.id = storageService.getId();
   }

  generateId() {
    if (this.id.length === 0) {
      this.id.push(1);
    } else {
      this.id.push((this.id[this.id.length - 1 ]) + 1);
    }
    this.storageService.postId(this.id.length);
    return this.id.length;
  }
}
