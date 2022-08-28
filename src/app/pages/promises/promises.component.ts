import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    });
    

    /*const promise = new Promise( ( resolve, reject ) => {

      if ( false ) {
        resolve('Hello world');
      } else {
        reject('Something went wrong')
      }
    });

    promise.then( (response) => {
      console.log(response);
    })
    .catch( error => console.log('Error in the promise', error ) );
    
    console.log('End of init');  
  }*/

  }

  getUsuarios() {

    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data));

    });
  }
}
