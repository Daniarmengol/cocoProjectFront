import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trustedUsers: User[] = []
  userShowcase: User[] = [];

  constructor(
    private usersService: UsersService
  ) { }

  async ngOnInit(): Promise<void> {
    this.trustedUsers = await this.usersService.getByTrust('1');
    console.log(this.trustedUsers);
    const rngTrusted: number = Math.floor(Math.random() * this.trustedUsers.length)
    console.log(rngTrusted);
    const user = this.trustedUsers[rngTrusted]
    this.userShowcase.push(user)
    console.log(this.userShowcase);


  }

}
