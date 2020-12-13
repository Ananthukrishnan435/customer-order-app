import { Component, OnInit,Input,SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-order-grid',
  templateUrl: './order-grid.component.html',
  styleUrls: ['./order-grid.component.css']
})
export class OrderGridComponent implements OnInit {
  
 
  @Input()data:object[];
  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    debugger
    if (changes && changes["data"] && changes["data"]["currentValue"] != changes["data"]["previousValue"]) {
      this.data = this.data;
     
    }
  }

}

