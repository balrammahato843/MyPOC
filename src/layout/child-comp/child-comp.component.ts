import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent implements OnInit {

  @Input() item:any
  
  @Output() updatedList = new EventEmitter;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  updatedUsers()
  {
     const UserObj = {name: 'omkar' , lastName : 'rawool'}
    this.updatedList.emit(UserObj);
  }

}


