import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color : string;
choose : number ;
 changeColor(){
   switch (this.choose) {
     case 1:
       this.color = "red";
       break;
     case 2 :
       this.color= "blue";
       break;
     case 3 :
       this.color= "pink";
       break;
     case 4 :
       this.color = "black";
       break;
     case 5 :
       this.color = "yellow" ;
       break;
     case 6:
       this.color = "\t#000080" ;
       break;
   }
 }
  constructor() { }

  ngOnInit(): void {
  }

}
