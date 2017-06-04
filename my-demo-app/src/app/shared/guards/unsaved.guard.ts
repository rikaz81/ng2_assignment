import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { EditVechicleComponent } from './../../pages/edit-vechicle/edit-vechicle.component';

@Injectable()
export class UnsavedGuard implements CanDeactivate<any> {
    constructor(private router: Router) {

    }


    canDeactivate(target: EditVechicleComponent): boolean {
        if (target.checkUnsaved()) {
            return confirm('There are unsaved changes, Are you sure?');
        }
        return true;
    }

}