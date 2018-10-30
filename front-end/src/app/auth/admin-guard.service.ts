import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private route: Router) {}

  canActivate() {
    if (this.authService.isAdmin()) {
      console.log('You are admin, go through!');
      return true;
    } else {
      console.log('Not an Admin! Begoneeeee');
      this.route.navigate(['unauthorized']);
      return false;
    }
  }
}
