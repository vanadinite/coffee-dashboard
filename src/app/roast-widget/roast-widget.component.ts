import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'roast-widget',
  templateUrl: './roast-widget.component.html',
  styleUrls: ['./roast-widget.component.less']
})
export class RoastWidgetComponent implements OnInit {
  data: any;

  constructor() {
      this.data = {
          labels: ['Light', 'Medium', 'Dark'],
          datasets: [
              {
                  data: [4, 15, 8],
                  backgroundColor: [
                      '#1B3D3A',
                      '#657773',
                      '#A4B3B6'
                  ],
                  hoverBackgroundColor: [
                      '#1B3D3A',
                      '#657773',
                      '#A4B3B6'
                  ]
              }]
          };
  }

  ngOnInit() {
  }

}
