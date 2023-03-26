import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Subscription } from 'rxjs';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css'],
})
export class PostBodyComponent implements OnInit, OnDestroy {
  post: any;
  postSub!: Subscription;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.postSub = this.postsService.getPosts().subscribe((posts: any) => {
    //   this.route.params.subscribe((params: Params) => {
    //     const id = params['id'];
    //     this.post = posts.slice(id, id + 1)[0];
    //   });
    // });
    this.postSub = this.postsService.post.subscribe((post) => {
      this.post = post;
    });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
