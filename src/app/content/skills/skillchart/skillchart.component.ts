import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-skillchart',
  templateUrl: './skillchart.component.html',
  styleUrls: ['./skillchart.component.css']
})
export class SkillchartComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor() { }
  ngAfterViewInit(): void {
    this.skillChartMethod();
  }

  ngOnInit(): void {
  }
  skillChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Java', 'Python', 'C++', 'C', 'Javascript', 'Typescript', 'PHP'],
        datasets: [{
          label: 'Relative Experience',
          data: [90, 85, 60, 65, 74, 65, 70],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,

        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
              suggestedMax: 100

            },
            gridLines:{
              color: "#fff",
              lineWidth:2
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white'
            },
            gridLines:{
              color: "#fff",
              lineWidth:2
            }
          }]


        },
        legend: {
          labels: {
              fontColor: 'white'
          }
        }
      }
    });
  
  }
}
