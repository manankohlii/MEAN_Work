import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 
export interface Post{
  userId: number;
  id:number;
  title:string;
  body:string;
}
export interface Comment{
  postId: number;
  id:number;
  email:string;
  name:string;
  body:string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';
  
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.postsUrl);
  }
  getComments(postId: number): Observable<Comment[]>{
    return this.http.get<Comment[]>('$(this.commentsUrl)${postId}');
  }
}
