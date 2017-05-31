import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private router: Router) {

    }
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        console.log('You are logged in ' + sessionStorage.getItem('loginFLag'));
        if (sessionStorage.getItem('loginFLag') === 'true') {
            //activate this guard if logged in

            return true;
        } else {
            // else return to login
            console.log('You are not logged in');
            this.router.navigate(['/', 'login']);
            return false;
        }

    }
}