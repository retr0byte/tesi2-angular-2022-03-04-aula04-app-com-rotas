import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-table',
  templateUrl: './multi-table.component.html',
  styleUrls: ['./multi-table.component.css'],
})
export class MultiTableComponent implements OnInit {
  private mFactor: number = 5;
  public multiTable: string[];

  constructor() {}

  ngOnInit() {}

  generateMultiTable(): void {
    let mFactors: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.multiTable = mFactors.map(
      (factor) => `${this.mFactor} x ${factor} = ${factor * this.mFactor}`
    );
  }
}
