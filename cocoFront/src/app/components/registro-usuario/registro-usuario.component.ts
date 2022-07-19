import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', [
        /* Validators.required,
        Validators.minLength(3) */
      ]),

      apellidos: new FormControl('', [
        /*  Validators.required,
         Validators.minLength(2) */
      ]),

      email: new FormControl('', [
       /*  Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) */]),

      direccion: new FormControl('', [
        /*  Validators.required,
         Validators.minLength(5) */
      ]),

      fecha_nacimiento: new FormControl('', [
        /* this.ageValidator */
      ]),

      username: new FormControl('', [
        /*     Validators.required,
            Validators.minLength(5),
            Validators.maxLength(15) */
      ]),

      password: new FormControl('', [
        /* Validators.required,
        Validators.minLength(5), */
      ])

    }, [])
  }

  ngOnInit(): void {
  }

  passwordValidator(pform: AbstractControl) {
    const password = pform.get('password')?.value;
    const repeatpassword = pform.get('repeatpassword')?.value;

    if (password !== repeatpassword) {
      return { passwordValidator: true }
    }

    return null

  }

  ageValidator(pControlName: AbstractControl) {

    const edad: number = parseInt(pControlName.value)

    if (isNaN(edad)) {
      return { agevalidator: 'La edad tiene que ser un numero' }
    } else if (edad < 18 || edad > 65) {
      return { agevalidator: 'La edad tiene que ser entre 18 y 65 años' }
    }

    return null
  }

  async getDataForm() {
    try {
      const response: any = await this.usersServices.registerUser(this.registerForm.value);
      console.log(response);
      const msg = (response.success) ? response.success : response.error;

      alert(msg);
      if (response.success) {
        this.router.navigate(['/login'])

      }
    } catch (error) {
      console.log(error)
    }

  }
}
