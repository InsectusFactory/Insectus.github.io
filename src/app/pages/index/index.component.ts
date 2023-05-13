import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions,ApexResponsive, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})


export class IndexComponent implements OnInit {
  // @ViewChild("chart") chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions3: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "Gaz cu efect de sera",
          data: [0, 0, 1.5, 2.4]
        },
        {
          name: "Furaje necesare",
          data: [1.8, 2.1, 4.3, 10]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Insecte",
          "Pui",
          "Porc",
          "Vita"
        ]
      },
      yaxis: {
        title: {
          text: "KG"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        
        y: {
          formatter: function(val: string) {
            return val + "Kg";
          }
        }
      }
    };

    this.chartOptions2 = {
      series: [
        {
          name: "Litri de apa",
          data: [23, 40, 52, 105]
        },
        {
          name: "Metri patrati de teren",
          data: [21, 50, 54, 251]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Insecte",
          "Pui",
          "Porc",
          "Vita"
        ]
      },
      yaxis: {
        title: {
          text: ""
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val: string) {
            
            return val;
          }
        }
      }
    };

    this.chartOptions3 = {
      series: [
        {
          name: "Proteina (grame)",
          data: [20, 19, 20, 20.5]
        },
        {
          name: "Fier (miligrame)",
          data: [6, 1.2, 1, 2]
        },
        {
          name: "Grasimi saturate (grame)",
          data: [4, 1, 4, 4]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Greieri",
          "Pui",
          "Porc",
          "Vita"
        ]
      },
      legend: {
        position: "bottom",
        offsetX: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

  ngOnInit(): void {
  }
}

