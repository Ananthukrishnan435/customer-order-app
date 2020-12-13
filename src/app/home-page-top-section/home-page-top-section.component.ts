import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home-page-top-section',
  templateUrl: './home-page-top-section.component.html',
  styleUrls: ['./home-page-top-section.component.css']
})
export class HomePageTopSectionComponent implements OnInit {
  userValue: string="";
  productValue: string="";
  qtyValue:string="";
  @Output() submitDetails= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onAddSubmit(){
    debugger
    this.userValue= document.getElementById("userField")["value"];
    this.productValue = document.getElementById("itemField")["value"];
    this.qtyValue= document.getElementById("quantityField")["value"];
    this.submitDetails.emit({User:this.userValue,Product:this.productValue,qty:this.qtyValue})
  }
}
