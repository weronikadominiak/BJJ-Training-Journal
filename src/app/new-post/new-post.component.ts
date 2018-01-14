import { Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post.model';
import { UidService } from '../uid.service';
import { StorageService } from '../storage.service';


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
    private storage: StorageService,
    private activatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(
      (params) => {
      this.post = this.postService.getPost(params.id);
      }
    );
    if (this.post !== undefined) {
      this.myPost = this.post;
      this.onEdit = true;
    }
  }

  addRate(rate) {
    this.myPost.rate = rate;
  }

  onSubmit(myPost) {
    if (this.onEdit === true) {
      this.postService.editPost(this.post, this.myPost);
      this.storage.post();
    } else {
      this.postService.addPost(myPost);
      this.storage.post();
    }
    this.router.navigate(['']);
  }
}
