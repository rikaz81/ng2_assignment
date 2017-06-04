import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './shared/guards/login.guard';
import { UnsavedGuard } from './shared/guards/unsaved.guard';
import { MultiplyPipe } from "app/shared/pipes/multiply.pipe";
import { FilterPipe } from "app/shared/pipes/filter.pipe";
import { AddVechicleComponent } from './pages/add-vechicle/add-vechicle.component';
import { SearchVechicleComponent } from './pages/search-vechicle/search-vechicle.component';
import { VechicleService } from "app/shared/services/vechicle.service";
import { EditVechicleComponent } from './pages/edit-vechicle/edit-vechicle.component';
import { LeftSideBannerComponent } from './left-side-banner/left-side-banner.component';
import { UserService } from "app/shared/services/user.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    MultiplyPipe,
    FilterPipe,
    AddVechicleComponent,
    SearchVechicleComponent,
    EditVechicleComponent,
    LeftSideBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    ReactiveFormsModule

  ],
  providers: [LoginGuard, UnsavedGuard, VechicleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
