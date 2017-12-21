import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bjj-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Output() rated: EventEmitter<number> = new EventEmitter;
  values = this.generateValues('star_border', 10);
  rate: number;
  ngOnInit() {
  }
  private generateValues(val: string, times: number): string[] {
    const result: string[] = [];
    while (--times >= 0) {
        result.push(val);
    }
    return result;
  }

  highlight(index) {
    this.values.forEach(
      (star, i) => {
      if (i <= index) {
        this.values[i] = 'star';
      } else {
        this.values[i] = 'star_border';
      }
    } );
    this.rate = index + 1 ;
    this.rated.emit(this.rate);
    }
}
