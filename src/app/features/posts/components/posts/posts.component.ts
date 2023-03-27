import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(
    private postsService: PostsService,
    private metaTag: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: any) => {
      this.posts = posts.slice(0, 10);
      // for (let i = 0; i < this.posts.length; i++) {
      //   this.title.setTitle(this.posts[i].title);
      //   this.metaTag.addTag({
      //     name: this.posts[i].title,
      //     content: this.posts[i].body,
      //   });
      // }
    });
  }
  sendPost(post: any) {
    this.postsService.post.next(post);
  }
}
