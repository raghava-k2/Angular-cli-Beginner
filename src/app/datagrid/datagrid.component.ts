import {Component, AfterContentInit, AfterViewInit, ElementRef} from '@angular/core';

@Component({selector: 'data-grid', templateUrl: './datagrid.component.html', styleUrls: ['./datagrid.component.css']})
export class DatagridComponent implements AfterContentInit,
AfterViewInit {
  constructor(private elementRef : ElementRef) {}
  ngAfterViewInit() : void {
    console.log(this.elementRef)
  }
  ngAfterContentInit() : void {
    console.log(this.elementRef);
  }
}