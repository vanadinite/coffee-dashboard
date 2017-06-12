import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-coffee-brands-widget',
  templateUrl: './favorite-coffee-brands-widget.component.html',
  styleUrls: ['./favorite-coffee-brands-widget.component.less']
})

export class FavoriteCoffeeBrandsWidgetComponent implements OnInit {
  coffeeBrands: CoffeeBrand[];

  constructor() {
    this.coffeeBrands = [
        {name: 'Storyville', city: 'Seattle, WA', favoriteRoast: 'Prologue', rating: 5, averageCostPerLb: 24,
        imageUrl: 'storyville.png' },
        {name: 'Counter Culture', city: 'Durham, NC', favoriteRoast: 'Apollo', rating: 3, averageCostPerLb: 23.25,
        imageUrl: 'counter-culture.jpg' },
        {name: 'Ozo', city: 'Boulder, CO', favoriteRoast: 'Ethiopia Beriti Tore', rating: 3, averageCostPerLb: 24,
        imageUrl: 'ozo.png' },
        {name: 'Starbuck\'s', city: 'Seattle, WA', favoriteRoast: 'Pike Place', rating: 2, averageCostPerLb: 13,
        imageUrl: 'starbucks.png' },
        {name: 'Unseen Bean', city: 'Boulder, CO', favoriteRoast: 'Miz Susan\'s', rating: 4, averageCostPerLb: 16.95,
        imageUrl: 'unseen-bean.png' },
        {name: 'Octane', city: 'Atlanta, GA', favoriteRoast: 'Super Regular', rating: 4, averageCostPerLb: 22.75,
        imageUrl: 'octane.jpg' },
        {name: 'PT\'s Coffee Roasting Co', city: 'Topeka, KS', favoriteRoast: 'El Salvador Finca Kilimanjaro Cascara', rating: 5,
        averageCostPerLb: 43.74, imageUrl: 'pts.png' },
        {name: 'Big Island Coffee Roasters', city: 'Mountain View, Hawaii', favoriteRoast: 'Puna Natural', rating: 5,
        averageCostPerLb: 39.88, imageUrl: 'big-island.png' },
        {name: 'Jackrabbit Java', city: 'Thermopolis, Wyoming', favoriteRoast: 'Microlot White Honey', rating: 5, averageCostPerLb: 15,
        imageUrl: 'jackrabbit-java.jpeg' },
    ];
  }

  ngOnInit() {
  }
}

interface CoffeeBrand {
  name: string,
  city: string,
  favoriteRoast: String,
  rating: Number,
  averageCostPerLb: Number,
  imageUrl: string
}
