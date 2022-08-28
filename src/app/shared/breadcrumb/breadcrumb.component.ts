import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

  public titulo!: string;

  constructor(private router: Router) {
    this.getArgumentosRuta();
  }

  getArgumentosRuta() {

    this.router.events
      .pipe(
        filter((event: any) => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe(  ({ title }) => {
        this.titulo = title;
        document.title = `AdminPro - ${ this.titulo }`;
      })
  }

}
