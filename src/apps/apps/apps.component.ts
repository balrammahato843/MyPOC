import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {


  title = 'task';
  myside: boolean = false;
  isDark = false;

  constructor() {}

  ngOnInit(): void {}

  switchTheme() {
    this.isDark = !this.isDark;
  }
}



