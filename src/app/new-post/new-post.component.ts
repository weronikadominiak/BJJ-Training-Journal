import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';
import { UidService } from '../uid.service';

@Component({
  selector: 'bjj-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() post;
  @Output() submit: EventEmitter<any> = new EventEmitter();
  // without any error occutes in html file, that post doesn't have properites like date, try with {}
  myPost: any = new Post('', '', '', '', '');
  onEdit = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private sharedService: SharedService,
    private uid: UidService,

  ) { }

  ngOnInit() {
    if (this.post !== undefined) {
      this.myPost = this.post;
      this.onEdit = true;
    }
  }

  addRate(rate) {
    this.myPost.rate = rate;
  }

  onSubmit(myPost) {
    this.myPost.id = this.uid.generateId();
    this.submit.emit(myPost);
    this.sharedService.emitChange(myPost);
    this.router.navigate(['']);
  }
}
