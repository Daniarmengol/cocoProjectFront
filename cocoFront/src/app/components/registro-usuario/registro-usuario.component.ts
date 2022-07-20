import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as dayjs from 'dayjs';

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
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/)
      ]),

      apellidos: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/),
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),



      direccion: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),

      fecha_nacimiento: new FormControl('', [
        this.ageValidator
      ]),

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),

      ]),

      repeatpassword: new FormControl('', [
        Validators.required
      ])

    }, [this.passwordValidator])
  }

  ngOnInit(): void {
    this.registerForm.controls["username"].valueChanges.subscribe((value) => {
      (value);
    })

  }

  passwordValidator(pform: AbstractControl) {
    const password = pform.get('password')?.value;
    const repeatpassword = pform.get('repeatpassword')?.value;

    if (password !== repeatpassword) {
      return { passwordvalidator: true }
    }

    return null

  }

  ageValidator(pControlName: AbstractControl) {

    let diferencia = (dayjs().diff(dayjs(pControlName.value), 'year'));
    if (diferencia >= 18) {
      return null
    } else {
      return { agevalidator: true }
    }

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

  apiDataValidator() {

  }
}