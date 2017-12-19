import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'bjj-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.css']
})
export class SinglePostViewComponent implements OnInit {
@Input() post: any;
@Output() remove: EventEmitter<any> = new EventEmitter;
@Output() edit: EventEmitter<any> = new EventEmitter;
edited = false;
  constructor(
    private postService: PostService,
  ) { }
  ngOnInit() {
  }

  removePost(post) {
    this.remove.emit(post);
  }

  editPost(post, changes) {
    this.postService.editPost(post, changes);
    this.edited = !this.edited;
  }

  onEditPost(post) {
    this.edited = !this.edited;
  }

}
