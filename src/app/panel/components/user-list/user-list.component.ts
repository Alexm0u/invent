import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'users-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  ngOnInit(): void {
    if (!this.user) throw Error('Se requiere la propiedad User');
  }
  @Input()
  public user!: User

}
