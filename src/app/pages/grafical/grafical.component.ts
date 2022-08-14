import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafical',
  templateUrl: './grafical.component.html',
  styleUrls: ['./grafical.component.css']
})
export class GraficalComponent {

  doughnutChartLabels: string[] = ['Pan', 'Refresco', 'Tacos'];

  public data1: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{
      data: [40, 10, 100],
      backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
      //hoverBackgroundColor: ['#00821C', '#09DB36', '#024D0F'],
      //hoverBorderColor: ['#000000', '#000000', '#00000003']
    },
    ]
  }
}
