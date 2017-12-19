import { SharedService } from './shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostStorageService } from './post-storage.service';
import { SinglePostViewComponent } from './single-post-view/single-post-view.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NewPostComponent,
    PostViewComponent,
    NavbarComponent,
    SinglePostViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    PostStorageService,
    PostService,
    SharedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
