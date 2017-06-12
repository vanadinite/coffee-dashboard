import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coffee-purchases-table',
  templateUrl: './coffee-purchases-table.component.html',
  styleUrls: ['./coffee-purchases-table.component.less']
})

export class CoffeePurchasesTableComponent implements OnInit {
  coffeePurchases: CoffeePurchase[];

  constructor() {
    this.coffeePurchases = [
      {date: new Date('June 12, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 1},
      {date: new Date('June 8, 2017'), brand: 'octane.jpg', roast: 'Apollo', amount: .5},
      {date: new Date('June 1, 2017'), brand: 'ozo.png', roast: 'Ethiopia Beriti Tore', amount: 2},
      {date: new Date('May 27, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 2},
      {date: new Date('May 20, 2017'), brand: 'counter-culture.jpg', roast: 'Apollo', amount: .8},
      {date: new Date('May 10, 2017'), brand: 'starbucks.png', roast: 'Pike Place', amount: 1},
      {date: new Date('May 1, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 2},
      {date: new Date('April 18, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 1},
      {date: new Date('April 2, 2017'), brand: 'unseen-bean.png', roast: 'Miz Susan\'s', amount: .5},
      {date: new Date('March 31, 2017'), brand: 'counter-culture.jpg', roast: 'Super Regular', amount: 1},
      {date: new Date('March 15, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 1},
      {date: new Date('March 2, 2017'), brand: 'ozo.png', roast: 'Ethiopia Beriti Tore', amount: .5},
      {date: new Date('February 28, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 1},
      {date: new Date('February 12, 2017'), brand: 'pts.png', roast: 'El Salvador Finca Kilimanjaro Cascara', amount: 2},
      {date: new Date('February 1, 2017'), brand: 'storyville.png', roast: 'Prologue', amount: 1},
    ]
  }

  ngOnInit() {
  }
}

interface CoffeePurchase {
  date: Date,
  brand: string,
  roast: string,
  amount: Number,
}
