import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  post = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
