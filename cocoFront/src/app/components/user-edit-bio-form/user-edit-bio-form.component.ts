import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-edit-bio-form',
  templateUrl: './user-edit-bio-form.component.html',
  styleUrls: ['./user-edit-bio-form.component.css']
})
export class UserEditBioFormComponent implements OnInit {

  // @ViewChild('avatarcillo')

  userBioForm: FormGroup | any;
  user: Observable<User[]> | any;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.userBioForm = new FormGroup({
      nombre: new FormControl([
        Validators.required
      ]),
      apellidos: new FormControl([
        Validators.required
      ]),
      email: new FormControl([]),
      discord: new FormControl([]),
      avatar: new FormControl([]),
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params: any) => {

      this.user = await this.usersService.getById(params.userId);

      this.userBioForm.patchValue({
        nombre: this.user.nombre,
        apellidos: this.user.apellidos,
        discord: this.user.discord,
        email: this.user.email,
        avatar: this.user.avatar
      })

    })

  }

  async getDataForm(userBioForm: any) {
    const myUser = await this.usersService.getUserByToken()
    try {
      console.log(userBioForm.value);
      const response: any = await this.usersService.editInfo(myUser.id, userBioForm.value)
      console.log(response);
      if (response.error) {
        Swal.fire({
          icon: 'error',
          title: '¡Uy!',
          text: 'Ha habido un problema, vuelve a intentarlo.',
          timer: 3000
        })
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Usuario editado!',
          text: 'Usuaro editado correctamente!',
          timer: 3000
        })
        setTimeout(() => {
          this.router.navigate(['/perfil', myUser.id])
        }, 4000);
      }
    } catch (err) {
      console.log(err);

    }
  }

}
