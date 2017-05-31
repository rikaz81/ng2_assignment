import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user: Object = { userName: '', password: '' };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkLogin(userName, password) {
    // console.log(this.user);
    if (userName === 'admin' && password === 'admin') {
      sessionStorage.setItem('loginFLag', 'true');
      this.router.navigate(['/', 'tasklist']);
    } else {
      let errMsg = 'Invalid username or password';
      alert(errMsg);
      console.log(errMsg);
    }

  }
}
