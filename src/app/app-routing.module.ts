import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () =>
      import(`./features/posts/posts.module`).then((m) => m.PostsModule),
  },
  {
    path: 'auth',
    loadChildren: () => import(`./auth/auth.module`).then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
