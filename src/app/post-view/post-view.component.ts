import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../post.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Post } from '../post.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'bjj-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy, OnChanges {
myPosts: Post[] = [];
subscritpion: Subscription;

  constructor(
    private postService: PostService,
    private storage: StorageService,
  ) {
   }

  ngOnInit() {
    this.storage.get();
    this.subscritpion = this.postService.newPost
    .subscribe(
      () => {
      this.myPosts = this.postService.getPosts();
      }
    );
  }

  ngOnChanges() {
    // this.storage.get();
  }

  ngOnDestroy() {
    this.subscritpion.unsubscribe();
  }

}
