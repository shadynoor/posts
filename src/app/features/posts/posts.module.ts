import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostBodyComponent } from './pages/post-body/post-body.component';

@NgModule({
  declarations: [PostsComponent, PostBodyComponent],
  imports: [CommonModule, PostsRoutingModule],
  exports: [PostsComponent],
})
export class PostsModule {}
