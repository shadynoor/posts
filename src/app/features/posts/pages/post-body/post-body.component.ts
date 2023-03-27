import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
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
    private route: ActivatedRoute,
    private metaTag: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.postSub = this.postsService.getPosts().subscribe((posts: any) => {
      this.route.params.subscribe((params: Params) => {
        const id = params['id'];
        this.post = posts.slice(+id - 1, +id)[0];

        this.title.setTitle(this.post.title);
        this.metaTag.addTag({
          name: this.post.title,
          content: this.post.body,
        });
      });
    });
    // this.postSub = this.postsService.post.subscribe((post) => {
    //   this.post = post;
    // });
  }

  ngOnDestroy(): void {
    this.postSub.unsubscribe();
  }
}
