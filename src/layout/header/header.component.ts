import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'ProductBoard';

  isDark=false;



  constructor() { }



  ngOnInit(): void {

  }

  switchTheme(){



   this.isDark=!this.isDark



  }



}
