import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostStorageService } from '../post-storage.service';

@Component({
  selector: 'bjj-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  // without any error occutes in html file, that post doesn't have properites like date, try with {}
  myPost: any;
  submitted = false;

  constructor(
    private postStorage: PostStorageService,
  ) { }

  ngOnInit() {
  }
  onSubmit(myPost) {
    // console.log(myPost);
    this.postStorage.post(myPost);
    this.submitted = true;
  }

}
