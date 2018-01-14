import { Component, Input, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { StorageService } from '../storage.service';


@Component({
  selector: 'bjj-single-post-view',
  templateUrl: './single-post-view.component.html',
  styleUrls: ['./single-post-view.component.css']
})
export class SinglePostViewComponent implements OnInit {
@Input() post: Post;

  constructor(
    private postService: PostService,
    private storage: StorageService,
  ) { }
  ngOnInit() {
    console.log('test');
    this.post.id = this.postService.indexOf(this.post);
  }

  removePost(id) {
    this.postService.removePost(id);
    this.storage.post();
  }

}
