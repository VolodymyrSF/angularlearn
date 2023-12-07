import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";
import {urls} from "../urls";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }


  getPostByUserId(userId:number):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.byUserId(userId))
  }
}
