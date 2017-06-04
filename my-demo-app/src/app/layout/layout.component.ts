import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "app/shared/services/user.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  searchText: string = "";
  adminUser: boolean = false;
  constructor(private router: Router, private userService: UserService) {
    this.adminUser = this.userService.isAuthorized();
  }

  ngOnInit() {
  }



  logout() {

    this.userService.logout();
    this.router.navigate(['/', 'guest-page']);
  }

  search() {
    console.log('Search clicked ', this.searchText);
  }

}
