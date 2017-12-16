import { PostStorageService } from '../post-storage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bjj-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {
myPosts = [];
  constructor(
    private postStorageService: PostStorageService,
  ) { }

  ngOnInit() {
    this.myPosts = this.postStorageService.get();
    this.myPosts.reverse();
    console.log(this.myPosts);
  }

  removePost(post) {
    console.log(post);
    this.myPosts = this.postStorageService.destroy(post);
  }

}
