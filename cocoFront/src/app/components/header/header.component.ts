import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User | any;
  token: string | null = localStorage.getItem('user-token');

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  async ngOnInit(): Promise<User | any> {
    this.user = await this.usersService.getUserByToken()
    console.log(this.user);

  }
  // ngOnInit(): void {

  // }

  logout(): void {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }

}
