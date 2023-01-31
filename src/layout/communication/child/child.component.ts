import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  uname!:String;


  @Output()
  notify:EventEmitter<String>= new EventEmitter<String>();

  passData(){
    this.notify.emit("this msg is comming from child")
  }
  
  constructor() { } 

  ngOnInit(): void {
  }

}
