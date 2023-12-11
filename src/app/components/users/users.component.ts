import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {NgForOf} from "@angular/common";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    UserComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:IUser[]
  constructor(private userService:UserService) {

  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users=value)
    }
}
