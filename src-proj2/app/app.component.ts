import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name:string=null;
  private jobTitle:string=null;
  private salary:number=null;
  private annualSalary:number=null;
  private logo:string=null;
  private userName:string=null;

  public constructor(){
    this.name="Yaswanth";
    this.jobTitle="FSD-Engineer";
    this.salary=21700;
    this.logo="assets/pic.jpg";
  }

  public getAnnualSalary(){
    this.annualSalary=this.salary*12;
    return this.annualSalary;
  }

  public greetUser(){
    this.userName="Mr"+" "+this.userName;
    alert('Welcome'+" "+this.userName);
  }
}
