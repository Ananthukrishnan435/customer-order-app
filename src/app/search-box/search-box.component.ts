import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() submitFilter = new EventEmitter();
  constructor() { }
  filterValue:string="";
  filterPeriod:string="";
  ngOnInit(): void {
  }
  onSearchSubmit(){
  this.filterPeriod= document.getElementById("searchPeriod")["value"];
  this.filterValue=  document.getElementById("searchItem")["value"];
  this.submitFilter.emit({FilterValue:this.filterValue,FilterPeriod:this.filterPeriod})
  }
}
