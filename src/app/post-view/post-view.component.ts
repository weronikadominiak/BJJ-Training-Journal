import { Component, OnInit } from '@angular/core';
import { PostStorageService } from '../post-storage.service';

@Component({
  selector: 'bjj-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
myPosts = [];
  constructor(
    private postStorage: PostStorageService,
  ) { }

  ngOnInit() {
    this.myPosts = this.postStorage.get();
    console.log(this.myPosts);
  }

}
