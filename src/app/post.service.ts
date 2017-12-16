import { Injectable } from '@angular/core';
import { PostStorageService } from './post-storage.service';

@Injectable()
export class PostService {

  constructor(
    private postStorage: PostStorageService,
  ) { }

    getPosts() {
      return this.postStorage.get();
    }

    removePost(post) {
      return this.postStorage.destroy(post);
    }

    addPost(post) {
      return this.postStorage.post(post);
    }
}
