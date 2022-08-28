import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, pipe, retry, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnDestroy {

  internalSubscription = new Subscription();

  constructor() { 
    
    /*this.retornaObservable().pipe(
      retry(2)
    ).subscribe({
        next: valor => console.log('Subs:', valor),
        error: error => console.warn('Error:', error),
        complete: () => console.info('Observer completed')
      }
    );*/
    this.internalSubscription = this.retornaIntervalo().subscribe({ next: console.log });

  }
  ngOnDestroy(): void {
    this.internalSubscription.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(1000)
            .pipe(
              take(10),
              map( valor => valor + 1 ),
              filter( valor => ( valor % 2 === 0) ? true : false)
            );
  }


  retornaObservable(): Observable<number> {

    return new Observable( observer => {

      let i = -1;

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);

        if ( i === 2 ) {
          i = 0;
          observer.error('Raised error');
        }

        if ( i === 4 ) {
          clearInterval( intervalo );
          observer.complete();
        }  

      }, 1000 )
    }); 

  }

}
