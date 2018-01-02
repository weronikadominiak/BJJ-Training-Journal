import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bjj-display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.css']
})
export class DisplayRatingComponent implements OnInit {
  @Input() rate: number;
  lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
  }

}
