import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { URL_CONST } from "app/shared/config/common.constants";
// import { Cookie } from 'cooki/ng2-cookies';

@Injectable()
export class UserService {

  public userID: string;
  public token: string;


  constructor(private http: Http) { }

  adminLogin(params) {
    // return this.http.post(URL_CONST.BACK_END_HOST + 'user/authenticate', params, this.getRequestOptions())
    //   .map((response: Response) => response.json(

    //   ));


    return this.http.post(URL_CONST.BACK_END_HOST + 'user/authenticate', params, { headers: this.getHeader() }).map((response) => {
      console.log(response.json());
      return response.json();

    }).catch((data) => {
      // console.log("ERROR @ Service", data);
      return Observable.throw(data);
    });

  }


  getRequestOptions() {
    return new RequestOptions({ headers: this.getHeader() });
  }
  getHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  isAuthorized() {
    this.setToken();


    if ((this.userID && this.token))
      return true;


    return false;
  }


  saveToken(tokenString, id) {
    sessionStorage.setItem('loginFLag', 'true');
    sessionStorage.setItem('_token', tokenString);
    sessionStorage.setItem('_user', id);
    this.setToken();
  }

  logout() {
    sessionStorage.setItem('loginFLag', 'false');
    sessionStorage.setItem('_token', null);
    sessionStorage.setItem('_user', null);
    this.setToken();
    sessionStorage.clear();
  }


  setToken() {
    this.token = sessionStorage.getItem('_token');
    this.userID = sessionStorage.getItem('_user');
  }
}
