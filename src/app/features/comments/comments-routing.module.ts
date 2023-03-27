import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentBodyComponent } from './pages/comment-body/comment-body.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    children: [{ path: ':id', component: CommentBodyComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule {}
