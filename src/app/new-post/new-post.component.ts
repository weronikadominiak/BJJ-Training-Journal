import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'bjj-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() post = this.editPost(this.post);
  // without any error occutes in html file, that post doesn't have properites like date, try with {}
  myPost: any = new Post('', '', '', '');

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (this.post !== undefined) {
      this.myPost = this.post;
    }

  }

  editPost(post) {
    }

  onSubmit(post) {
    this.postService.addPost(post);
    this.router.navigate(['']);
  }

}
