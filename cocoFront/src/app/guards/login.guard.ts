import { Injectable } from '@angular/core';
import { CanActivate, } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private router: Router) { };

  canActivate(): boolean {
    console.log('estoy pasando por el guard')
    let token: string | null = localStorage.getItem('user-token')
    if (token === null) {
      this.router.navigate(['/login'])
      return false
    }
    return true;
  }

}

