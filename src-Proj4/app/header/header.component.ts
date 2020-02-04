import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  private title:string=null;
  private logoUrl:string=null;

  constructor() { 
    this.title="Angular Work";
    this.logoUrl="assets/pic.jpg";
  }


}
