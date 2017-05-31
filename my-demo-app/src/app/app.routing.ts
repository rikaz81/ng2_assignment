
import { Routes, RouterModule } from '@angular/router';


import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { DataDrivenComponent } from './pages/data-driven/data-driven.component';
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

},
{
    path: 'data-driven',
    component: DataDrivenComponent

}
];


const FORM_ROUTES: Routes = [{
    path: 'template-driven',
    component: TemplateDrivenComponent

},
{
    path: 'data-driven',
    component: DataDrivenComponent

}
];


const PAGE_ROUTES: Routes = [{
    path: 'tasklist',
    component: TaskListComponent,
    canActivate: [LoginGuard]
},
{
    path: 'taskadd',
    component: TaskAddComponent,
    canDeactivate: [UnsavedGuard],
    canActivate: [LoginGuard]

}, {
    path: 'taskview/:id',
    component: TaskAddComponent
    // canDeactivate:[UnsavedGuard],
    // canActivate: [LoginGuard]

}, {
    path: 'forms',
    children: FORM_ROUTES

},
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