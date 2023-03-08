import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
import { ToastrserviceService } from '../services/toastrservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private toastr: ToastrserviceService,private router: Router ,private authService: AuthService){}
  canActivate(){
    if(this.authService.IsLoggedIn()){
      return true;
    }
    // this.toastr.notLogged()
   // alert("Not Logged ")
    this.router.navigate(['login'])
    return false;
  }
  





}
