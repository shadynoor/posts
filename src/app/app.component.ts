import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Posts';
  constructor(private titleService: Title, private metaTagService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Posts');

    this.metaTagService.addTags([
      {
        name: 'post 1',
        content: 'post 1 body',
      },
      {
        name: 'post 2',
        content: 'post 2 body',
      },
      {
        name: 'post 3',
        content: 'post 3 body',
      },
    ]);
  }
}
