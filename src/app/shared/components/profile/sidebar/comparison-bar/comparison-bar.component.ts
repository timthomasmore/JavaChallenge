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

  percent: number;


  constructor() { }

  ngOnInit() {
    this.percent = Math.round( this.begin / this.end * 100 );
  }

}
