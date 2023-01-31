import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  value: any;
  notebookexist: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  submit(val: any) {
    this.value = val.value;
  }
  distroy() {
    this.notebookexist = false;
  }
}
