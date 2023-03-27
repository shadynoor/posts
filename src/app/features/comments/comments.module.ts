import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { CommentBodyComponent } from './pages/comment-body/comment-body.component';

@NgModule({
  declarations: [CommentsComponent, CommentBodyComponent],
  imports: [CommonModule, CommentsRoutingModule],
  exports: [CommentsComponent],
})
export class CommentsModule {}
