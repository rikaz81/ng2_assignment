import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TaskAddComponent } from './../../pages/task-add/task-add.component';

@Injectable()
export class UnsavedGuard implements CanDeactivate<any> {
    constructor(private router: Router) {

    }


    canDeactivate(target: TaskAddComponent): boolean {
        if (target.checkUnsaved()) {
            return confirm('There are unsaved changes, Are you sure?');
        }
        return true;
    }
    // canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //     console.log('You are logged in ' + sessionStorage.getItem('loginFLag'));
    //     if (sessionStorage.getItem('loginFLag') === 'true') {
    //         //activate this guard if logged in

    //         return true;
    //     } else {
    //         // else return to login
    //         console.log('You are not logged in');
    //         this.router.navigate(['/', 'login']);
    //         return false;
    //     }

    // }
}