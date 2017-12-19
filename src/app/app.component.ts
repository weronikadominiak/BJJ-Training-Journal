import { SharedService } from './shared.service';
import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'bjj-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private postService: PostService,
    private sharedService: SharedService,
) {
      sharedService.changeEmitted$.subscribe(
    post => {
      this.postService.addPost(post);
    });
  }
}
