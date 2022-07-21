import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  user: Observable<User[]> | any;
  profileTab: string = 'informacion';

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.user = await this.usersService.getById(params.userId);
    })
  };

  cargarArticle(article: string): void {
    this.profileTab = article;
  }

}
