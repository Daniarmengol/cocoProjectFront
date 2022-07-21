import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userShowcase: User[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  async ngOnInit(): Promise<void> {
    this.userShowcase = await this.usersService.getRandomTrusted()
  }
}
