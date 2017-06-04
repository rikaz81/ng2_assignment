import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "app/shared/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: Object = { userName: '', password: '' };
  error: boolean = false;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  checkLogin(userName, password) {
    // console.log(this.user);
    this.error = false;
    this.userService.adminLogin({ name: userName, password: password })
      .subscribe((data) => {
        console.log('Login response', data);
        this.userService.saveToken(data['token'], data['id']);
        this.router.navigate(['/', 'vechicle', 'search-vechicle']);
      }, (err) => {
        this.error = true;
        console.log('Error @ adminLogin', err);
        let errMsg = 'Invalid username or password';
      });



  }
}
