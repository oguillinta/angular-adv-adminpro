import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.css']
})
export class DonutComponent {

  @Input() title: string = 'Blank Title';

  // Doughnut
   doughnutChartLabels: string[] = [ 'Labels 1', 'Labels 2', 'Labels 3' ];
  //@Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  
  @Input('data') public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [350, 450, 100], 
        backgroundColor: ['#00821C','#09DB36','#024D0F'],
        //hoverBackgroundColor: ['#00821C','#09DB36','#024D0F'],
        //hoverBorderColor:['#000000','#000000','#00000003']
      },
    ]
  };
  
  public doughnutChartType: ChartType = 'doughnut';

}
