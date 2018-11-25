import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comparison-bar',
  templateUrl: './comparison-bar.component.html',
  styleUrls: ['./comparison-bar.component.scss']
})
export class ComparisonBarComponent implements OnInit {

  @Input()
  begin: number;
  @Input()
  end: number;
  @Input()
  beginText: string;
  @Input()
  endText: string;

  widthPercent: number;
  percent: number;


  constructor() { }

  ngOnInit() {
    this.widthPercent = Math.round( this.begin / this.end * 100 );
    this.widthPercent > 100 ? this.widthPercent = 100 : this.widthPercent = this.widthPercent;
    this.percent = Math.round( (this.begin === 0 ? 1 : this.begin) / (this.end === 0 ? 1 : this.end) * 100 );
  }

}
