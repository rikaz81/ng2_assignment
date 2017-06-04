import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskAddComponent } from './pages/task-add/task-add.component';
import { Routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginGuard } from './shared/guards/login.guard';
import { UnsavedGuard } from './shared/guards/unsaved.guard';
import { DataDrivenComponent } from './pages/data-driven/data-driven.component';
import { TemplateDrivenComponent } from './pages/template-driven/template-driven.component';
import { TodoService } from "app/shared/services/todo.service";
import { PostService } from "app/shared/services/post.service";
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
    TaskListComponent,
    TaskAddComponent,
    LoginComponent,
    LayoutComponent,
    DataDrivenComponent,
    TemplateDrivenComponent,
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
  providers: [LoginGuard, UnsavedGuard, TodoService, PostService, VechicleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
