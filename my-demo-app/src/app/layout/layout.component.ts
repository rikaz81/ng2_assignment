import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

searchText: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  // searchStr: string;


  // searchClick(): void {
  //   alert('Search button clicked ');
  //   console.log(this.searchStr);
  // }

  logout() {
    sessionStorage.setItem('loginFLag', 'false');
    this.router.navigate(['/', 'login']);
  }

  search(){
    console.log('Search clicked ',this.searchText);
  }

}
