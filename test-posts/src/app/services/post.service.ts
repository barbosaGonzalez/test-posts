import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from "app/models/post";

@Injectable()
export class PostService  {

   constructor(private http: Http) {
   }

   getPosts(): Observable<Post[]> {
      return this.http.get("http://jsonplaceholder.typicode.com/posts")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}