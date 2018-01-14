import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { PostService } from './post.service';
import { Post } from './post.model';
import 'rxjs/Rx';
import { UidService } from './uid.service';


@Injectable()
export class StorageService {

  constructor(
    private http: HttpClient,
    private postService: PostService,
    private uid: UidService,
  ) { }

  get() {
    return this.http.get('https://bjj-dziennik.firebaseio.com/bjj-dziennik.json')
    .subscribe(
      (posts: Post[]) => {
        this.postService.setPosts(posts);
      }
    );
  }
  post() {
    return this.http.put('https://bjj-dziennik.firebaseio.com/bjj-dziennik.json', this.postService.getPosts())
    .subscribe(
      () => {
        this.get();
      }
  );
  }

  getId() {
    return this.http.get('https://bjj-dziennik.firebaseio.com/id.json')
    .subscribe (
      (id) => {
        this.uid.setId(id);
      }
    );
  }

  postId() {
    return this.http.put('https://bjj-dziennik.firebaseio.com/bjj-dziennik.json', this.uid.getId());
  }
}
