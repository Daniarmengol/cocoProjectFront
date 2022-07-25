import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import * as dayjs from 'dayjs';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  @ViewChild("placesRef") placesRef: GooglePlaceDirective | any;
  options: any = {
    types: [],
    componentRestrictions: { country: 'ES' }
  }

  registerForm: FormGroup;

  constructor(
    private usersServices: UsersService,
    private router: Router
  ) {
    this.registerForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      direccion: new FormControl('', [
        Validators.required
      ]),
      fecha_nacimiento: new FormControl('', [
        this.ageValidator
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        this.userDupeValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      repeatpassword: new FormControl('', [])
    }, [this.passwordValidator,])
  }

  ngOnInit(): void {
    // this.registerForm.controls["username"].valueChanges.subscribe((value) => {
    //   (value);
    // })

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
      alert(msg); // sweet alerts
      if (response.success) {
        this.router.navigate(['/login'])
      }
    } catch (error) {
      console.log(error)
    }

  }

  async userDupeValidator(pControlName: AbstractControl) {
    // tengo que recoger el valor del input username y con ese value hacer una peticion al servicio 
    //y la peticion debe de llamar a la ruta creada (usernameDuplicado) esto me devuelve true, si me devuelve true es que ya existe el username y tengo que lanzar el error, si me devuelve false no está duplicado y es correcto
    const myUsername = pControlName.value;
    console.log(myUsername);
    const dbCheck = await this.usersServices.getByStrictUsername(myUsername);
    console.log(dbCheck);


    if (dbCheck) {
      return null
    } else {
      return { userDupeValidator: true }
    }

  }

  handleAddressChange($event: any) {
    this.registerForm.patchValue({
      direccion: $event.formatted_address
    })
  }
}
