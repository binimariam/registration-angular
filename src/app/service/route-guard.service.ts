import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate {

  constructor(private router: Router)
    {
    }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
      if(localStorage.key)
      return true;

      this.router.navigate(['login']);
      
      return false;
    }
}