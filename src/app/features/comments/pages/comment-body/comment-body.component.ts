import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment-body',
  templateUrl: './comment-body.component.html',
  styleUrls: ['./comment-body.component.css'],
})
export class CommentBodyComponent {
  comment: any;
  commentSub!: Subscription;

  constructor(
    private comnmentService: CommentsService,
    private title: Title,
    private metaTag: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.commentSub = this.comnmentService
      .getComments()
      .subscribe((comments: any) => {
        this.route.params.subscribe((params: Params) => {
          const id = +params['id'];
          this.comment = comments.slice(id - 1, id)[0];
        });
      });
  }

  ngOnDestroy(): void {
    this.commentSub.unsubscribe();
  }
}
