import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.css']
})
export class IncrementerComponent implements OnInit {


  @Input() progress: number = 50;
  @Input() bgClass: string = 'btn-primary';


  @Output() emitProgress: EventEmitter<number> =  new EventEmitter<number>();

    
  ngOnInit(): void {
    this.bgClass = `btn ${ this.bgClass }`
  }

  public get getPercentage() : string {
    return `${ this.progress }%`;
  }
  
  public changeValue( value: number ): number {
    console.log('emitting progress from incrementer');

    if ( this.progress >= 100 && value >= 0 ) {
      this.emitProgress.emit(100);
      return this.progress = 100;
    }

    if ( this.progress <= 0 && value < 0 ) {
      this.emitProgress.emit(0);
      return this.progress = 0;
    }
    
    this.emitProgress.emit(this.progress + value);
    
    return this.progress = this.progress + value;
  }

  onChange( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progress = 100;
    } else if ( newValue <= 0 ) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.emitProgress.emit( this.progress ); 
  }

}
