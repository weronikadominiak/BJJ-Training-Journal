import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() { }
  ngOnInit() {
  }

  removePost(post) {
    this.remove.emit(post);
  }

  editPost(post) {
    this.edited = !this.edited;
    this.post = this.post;
    this.edit.emit(post);
  }

}
