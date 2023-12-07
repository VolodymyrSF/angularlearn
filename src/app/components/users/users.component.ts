import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IPost, IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {NgForOf} from "@angular/common";
import {PostsComponent} from "../posts/posts.component";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:IUser[]
  posts:IPost[]

  constructor(private userService: UserService,private postService:PostService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getPosts(userInfo: IUser) {
    this.postService.getPostByUserId(userInfo.id).subscribe(value => this.posts=value)
  }
}
