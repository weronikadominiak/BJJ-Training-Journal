import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

import { Post } from '../post.model';
import { UidService } from '../uid.service';

@Component({
  selector: 'bjj-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() post: Post;
  myPost: Post = new Post;
  onEdit = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private uid: UidService,

  ) { }

  ngOnInit() {
    if (this.post !== undefined) {
      this.myPost = this.post;
      this.onEdit = true;
    }
  }

  addRate(rate) {
    this.myPost.rate = rate;
  }

  onSubmit(myPost: Post) {
    this.myPost.id = this.uid.generateId();
    if (this.onEdit === true) {
      this.postService.editPost(this.post, this.myPost);
    } else {
      this.postService.addPost(myPost);
    }
    this.router.navigate(['']);
  }
}
