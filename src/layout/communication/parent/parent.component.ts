import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  username:any;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(val:any)
  {
    this.username=val.value;
  }
  }


