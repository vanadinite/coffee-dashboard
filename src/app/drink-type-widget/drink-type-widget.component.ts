import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drink-type-widget',
  templateUrl: './drink-type-widget.component.html',
  styleUrls: ['./drink-type-widget.component.less']
})
export class DrinkTypeWidgetComponent implements OnInit {
  data: any;

  constructor() {
    this.data = {
      datasets: [{
        data: [2, 3, 8, 5, 4],
        backgroundColor: [
          '#A4B3B6',
          '#8074E9',
          '#1B3D3A',
          '#D83F87',
          '#F6B26E'
        ],
        label: 'Drink Data'
      }],
      labels: [
        'Latte',
        'Americano',
        'Black Coffee',
        'Cappucino',
        'Cortado'
      ]
    }
  }

  ngOnInit() {
  }

}
