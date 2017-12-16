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
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NewPostComponent,
    PostViewComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    PostStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
