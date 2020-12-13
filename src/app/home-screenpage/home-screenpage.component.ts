import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderGridComponent } from '../order-grid/order-grid.component';
@Component({
  selector: 'app-home-screenpage',
  templateUrl: './home-screenpage.component.html',
  styleUrls: ['./home-screenpage.component.css']
})
export class HomeScreenpageComponent implements OnInit {
  @ViewChild(OrderGridComponent, {static: false}) childRef: OrderGridComponent;
 today:string ='';
 lastWeekDate:string ='';
 IntialData:object[]=[]
  constructor() { }
  showGrid:boolean= true;
  public data: object[]=[
    {
      User:"User A",
      Product:"Fanta",
      Production:"China",
      Quantity: "1",
      'Order Date':"9-12-2020"

    },
    {
      User:"User A",
      Product:"Pepsi",
      Production:"China",
      Quantity: "2",
      'Order Date':"7-12-2020"
    },
    {
      User:"User B",
      Product:"Cola",
      Production:"Russia",
      Quantity: "2",
      'Order Date':"1-12-2020"
    },
    {
      User:"User B",
      Product:"Thumbs up",
      Production:"UK",
      Quantity: "2",
      'Order Date':"5-12-2020"
    },
    {
      User:"User B",
      Product:"Mop",
      Production:"Russia",
      Quantity: "2",
      'Order Date':"12-12-2020"
    },
    {
      User:"User C",
      Product:"7up",
      Production:"USA",
      Quantity: "1",
      'Order Date':"11-12-2020"
    },
    {
      User:"User D",
      Product:"7up",
      Production:"Mexico",
      Quantity: "1",
      'Order Date':"11-12-2020"
    },
    
  ]
  ngOnInit(): void {

    var currentday = new Date();
    var dd = String(currentday.getDate()).padStart(2, '0');
    var mm = String(currentday.getMonth() + 1).padStart(2, '0'); 
    var yyyy = currentday.getFullYear();

    this.today = dd + '/' + mm + '/' + yyyy;

    var date = new Date();
    date.setDate(date.getDate() - 7);
    this.lastWeekDate = date.getDate()+'/'+ (date.getMonth()+1) +'/'+date.getFullYear();
    this.IntialData= this.data;
  }
  
  onSubmitDetails(event){

    debugger
   this.showGrid =false;
   var contextObj = this;
   if(event["qty"]==""){
     event["qty"]=1;
   }
  var _copyData= this.data
    _copyData.push({
    User:event["User"],
    Product:event["Product"],
    Production:"India",                 //   New Orders will e added wit Production :India 
    Quantity:event["qty"],
    'Order Date':contextObj.today
  })
  setTimeout(function () {
    contextObj.data= _copyData;
    contextObj.IntialData= contextObj.data;
    contextObj.showGrid= true;
    alert("Order Added")
  }, 1000);
  
  }
  onSubmitFilter(event){
    debugger 
    var contextObj =this;
    var results = [];
    contextObj.showGrid= false;
    var searchField =["User","Product","Production","Quantity"]
    var searchVal = event["FilterValue"];
    if(event["FilterPeriod"]=="All Time"){
      this.data= this.IntialData;
    }
    if(searchVal.length > 0)
    {
      
        for (let i=0 ; i < this.data.length ; i++)
        {
          for(let j = 0;j<searchField.length;j++)
          {
          if (this.data[i][searchField[j]] == searchVal) 
          {
            results.push(this.data[i]);
          }
        }
      }
    }
    else{
      results= this.IntialData;
    }
      if(event["FilterPeriod"]=="7 Days"){
       contextObj.checkLastWeekFiterPeriod(results);
     }
      else if(event["FilterPeriod"]=="Today"){
        contextObj.checkTodayFilterPeriod(results);

      }
      setTimeout(function () {
        contextObj.data= results;
        contextObj.showGrid= true;
        if(contextObj.data.length>0){
      
        }
        else{
          alert("No  Data exist")
        }
      }, 1000);

}
checkLastWeekFiterPeriod(results){
  debugger
  var thisDate= new Date()
  var thisday = thisDate.getDate()
  var thisMonth=thisDate.getMonth() + 1 
  var thisFullYear= thisDate.getFullYear();
  for(let k = 0;k<results.length;k++){
    var  s=[];
    s=results[k]["Order Date"].split("-")
    if(( (thisday - parseInt(s[0]))>7) && thisMonth== parseInt(s[1]) && thisFullYear== parseInt(s[2]))
    {
      results.splice(k,1);
    }

  }
}
checkTodayFilterPeriod(results){
  debugger
  var thisDate= new Date()
  var thisday = thisDate.getDate()
  var thisMonth=thisDate.getMonth() + 1 
  var thisFullYear= thisDate.getFullYear();
  for(let k = 0;k<results.length;k++){
    var  s=[];
    s=results[0]["Order Date"].split("-")
    if(( (thisday - parseInt(s[0]))>1) && thisMonth== parseInt(s[1]) && thisFullYear== parseInt(s[2]))
    {
      results.splice(0,1);
      if(k!=0){
      k=k-1;
      }
    }

  }
}
 
}
