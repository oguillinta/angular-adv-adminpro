import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard!!!',
      icono: 'mdi mdi-guauge',
      submenu: [
         { titulo: 'Main', url: '/' },
         { titulo: 'ProgressBar', url: 'progress' },
         { titulo: 'Gráficas', url: 'grafical' },
         { titulo: 'Promises', url: 'promises' },
         { titulo: 'rxjs', url: 'rxjs' }
      ]
    }
  ];

  constructor() { }
}
