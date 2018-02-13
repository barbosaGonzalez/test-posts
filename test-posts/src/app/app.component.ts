import { Component } from '@angular/core';
import { PostService } from "app/services/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Posts!';

  posts;

  constructor(private postService: PostService) {
    this.posts = postService.getPosts();
  }
}
