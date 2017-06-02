import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side-banner',
  templateUrl: './left-side-banner.component.html',
  styleUrls: ['./left-side-banner.component.css']
})
export class LeftSideBannerComponent implements OnInit {
  urlVariable: string = 'https://static.wixstatic.com/media/98a7ed_6ed40a1d847b4f60be28c9fe224852e9~mv2.gif';
  constructor() { }

  ngOnInit() {
  }

}
