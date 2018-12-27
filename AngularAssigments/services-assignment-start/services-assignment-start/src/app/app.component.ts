import {Component, OnInit} from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  usersActive: string[] = [];
  usersInactive: string[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersActive = this.usersService.activeUsers;
    this.usersInactive = this.usersService.inactiveUsers;
  }
}
