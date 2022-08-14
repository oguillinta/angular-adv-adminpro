import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progress1: number = 25;
  progress2: number= 50;

  /*public syncValue1(value: number): void {
    console.log('change value 1');
    this.progress1 = value;
    console.log(this.progress1);
  }

  public syncValue2(value: number): void {
    console.log('change value 2');
    this.progress2 = value;
    console.log(this.progress1);
  }*/
  
  public get getProgress1() : string {
    return `${ this.progress1 }%`
  }

  public get getProgress2() : string {
    return `${ this.progress2 }%`
  }
  

}
