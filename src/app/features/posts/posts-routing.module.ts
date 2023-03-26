import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostBodyComponent } from './pages/post-body/post-body.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: 'body/:id',
        component: PostBodyComponent,
        children: [
          {
            path: 'comments',
            loadChildren: () =>
              import(`../comments/comments.module`).then(
                (m) => m.CommentsModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
