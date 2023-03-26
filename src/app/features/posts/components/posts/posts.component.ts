import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: any) => {
      this.posts = posts.slice(0, 5);
    });
  }
  sendPost(post: any) {
    this.postsService.post.next(post);
  }
}
