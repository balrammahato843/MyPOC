import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.scss']
})
export class ParentCompComponent implements OnInit {
 
data=10;
user:any

  constructor() { }

  ngOnInit(): void {
  }

  update_child()
  {
    this.data= Math.random()
  }

  updatedUsers(event:any)
  {
    console.log(event)
    this.user=event
  }

}
