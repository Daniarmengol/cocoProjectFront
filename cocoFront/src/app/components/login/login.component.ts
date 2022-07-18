import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]),

      password: new FormControl('', [
        Validators.required
      ]),
    })
  }

  ngOnInit(): void {
  }

  async getDataForm(formData: any) {
    /* console.log(this.loginForm.value) */
    try {
      const response: User | any = await this.usersService.login(this.loginForm.value)
      console.log(response);
      if (response.token) {
        localStorage.setItem('user-token', response.token)
        this.router.navigate(['/home'])
      }

    } catch (error) {

    }



  }

  /* 
    async getDataForm(pForm: any) {
      //tenemos enviar los datos a la api a traves del servicio.
      try {
        const response: User | any = await this.usersService.login(pForm.value)
        console.log(response);
        if (response.token) {
          localStorage.setItem('user-token', response.token)
          this.router.navigate(['/premio', response.token])
        }
        else {
          alert(response.error)
        }
      } catch (error) {
        console.log(error)
      }
    } */



}
