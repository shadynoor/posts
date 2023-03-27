import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  comment = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
