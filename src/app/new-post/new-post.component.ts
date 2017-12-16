import { PostService } from '../post.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'bjj-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // without any error occutes in html file, that post doesn't have properites like date, try with {}
  myPost: any = new Post('', '', '', '');
  submitted = false;

  constructor(
    private postService: PostService,
  ) { }

  ngOnInit() {
  }
  onSubmit(post) {
    this.postService.addPost(post);
    this.submitted = true;
  }

}
