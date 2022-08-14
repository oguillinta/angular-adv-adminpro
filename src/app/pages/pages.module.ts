import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    ProgressComponent,
    GraficalComponent,
    PagesComponent,
    DashboardComponent
  ],
  imports: [
    NgChartsModule,
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [
    ProgressComponent,
    GraficalComponent,
    PagesComponent
  ]
})
export class PagesModule { }
