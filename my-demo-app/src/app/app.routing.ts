
import { Routes, RouterModule } from '@angular/router';

import { AddVechicleComponent } from './pages/add-vechicle/add-vechicle.component';
import { SearchVechicleComponent } from './pages/search-vechicle/search-vechicle.component';
import { EditVechicleComponent } from './pages/edit-vechicle/edit-vechicle.component';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './shared/guards/login.guard';
import { UnsavedGuard } from './shared/guards/unsaved.guard';

const VECHICLE_ADMIN_ROUTES: Routes = [{
    path: 'add-vechicle',
    component: AddVechicleComponent,
    canDeactivate: [UnsavedGuard],
    canActivate: [LoginGuard]

}, {
    path: 'edit-vechicle',
    component: EditVechicleComponent,
    canDeactivate: [UnsavedGuard],
    canActivate: [LoginGuard]

},
{
    path: 'search-vechicle',
    component: SearchVechicleComponent
    // canDeactivate: [UnsavedGuard],
    // canActivate: [LoginGuard]

}
];

const PAGE_ROUTES: Routes = [
    {
        path: 'vechicle',
        children: VECHICLE_ADMIN_ROUTES
    }
];


const APP_ROUTES: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: PAGE_ROUTES
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'guest-page',
        component: SearchVechicleComponent
    },
    //match for empty
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/guest-page'
    },
    //file not found
    {
        path: '**',
        redirectTo: '/guest-page'
    }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);