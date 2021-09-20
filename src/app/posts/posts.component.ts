import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts = [];
  message: string;

  constructor(
      private service: PostsService
  ) {}

  ngOnInit(): void {
    this.service.fetchPromise().then(post => {
      console.log('fetchPromise CALLED');
      this.posts = post;
    })
  }

  add(title: string) {
    const post = { title }
    this.service.create(post).subscribe(p => {
      this.posts.push(p);
    }, err => this.message = err);
  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.service.remove(id).subscribe();
    }
  }
}
