import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post, PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  comments: {[key:number]:Comment[]} = {};
  showComments: { [key: number]: boolean } = {};
  postService: any;

  constructor(postService : PostsService){}

  ngOnInit(): void {
      this.postService.getPosts().subscribe((data: Post[])=>{
        this.posts = data;
      });
  }
  toggleComments(postId: number): void {
    if (this.showComments[postId]) {
      this.showComments[postId] = false;
    } else {
      if (!this.comments[postId]) {
        this.postService.getComments(postId).subscribe((data: Comment[]) => {
          this.comments[postId] = data;
        });
      }
      this.showComments[postId] = true;
    }
  }
}
