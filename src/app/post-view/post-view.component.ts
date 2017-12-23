import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bjj-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
myPosts = [];
  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
    this.myPosts = this.postService.getPosts();
  }

  removePost(post) {
    this.myPosts = this.postService.removePost(post);
  }
}
