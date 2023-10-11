import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  public users: User[] = [];

  constructor(private userService: UsersService) {}
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }
}
