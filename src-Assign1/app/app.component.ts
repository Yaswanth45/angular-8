import { Component } from '@angular/core';
import { isNull } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private message:string =null;
  private version:number=null;
  private ind:number=null;
  private topics:string[]=null;

  public constructor(){
    this.message="Assignment Page";
    this.version=8;
    this.topics=['Data Binding','Forms','http','Routing'];
  }

  public addTopic(currentTopic:string):boolean{
    if(currentTopic.length==0){
      alert(`Required Field`);
      return false;
    }
    for(var topic of this.topics)
    {
        if(currentTopic==topic)
        {
          alert(`Duplicate value...! Enter new value`);
          return false;
        }
     }
     this.topics.push(currentTopic);
  }
  public deleteTopic(idx:number):void{
    if(confirm('Do you want to delete')){
      this.topics.splice(idx,1);
    }
  }
  public deleteTopics(currentTopic:string):void{
    if(confirm('Do you want to delete')){
      for(var topic of this.topics)
      {
        if(currentTopic==topic){
          this.ind =this.topics.indexOf(currentTopic);
          this.topics.splice(this.ind,1);
        }
      }
    }
  }
  public searchTopic(currentTopic:string):void{
    for(var topic of this.topics){
      if(currentTopic==topic){
        this.ind =this.topics.indexOf(currentTopic);
        alert(`Element Found at`+" "+(this.ind+1));
      }
    }
  }

  public editTopic(idx:number){
    for(var topic of this.topics){
     // this.topic=;
    }
  }

  public updateTopic(currentTopic){

  }
}