import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostViewComponent } from './post-view/post-view.component';
import { NewPostComponent } from './new-post/new-post.component';
const routes: Routes = [
  {
    path: '',
    component: PostViewComponent,
  },
  {
    path: 'view-post',
    component: PostViewComponent,
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
