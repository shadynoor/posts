import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  comments: any;

  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.commentsService.getComments().subscribe((comments: any) => {
      this.comments = comments.slice(0, 5);
    });
  }
}
