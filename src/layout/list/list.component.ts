// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../service/api.service';

// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.scss']
// })
// export class ListComponent implements OnInit {


//   constructor(private service : ApiService) { }

//  displayedColumns: string[] = ['username','phone','email','description','startTime','endTime'];
//   dataSource : any;

//   ngOnInit(): void {
//     this.getEmployees();
//     console.log(this.dataSource);
//   }

// getEmployees()
// {
//  this.service.getEmployee().subscribe(res=>
//   {
//      this.dataSource=res;
//   }
//   );
  
// }

// }


import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ApplicationConfig } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { employee } from '../model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;
  dataSource : any;
employee : employee[]=[]


  displayedColumns: string[] = ['id','username','phone','email','description','startTime','endTime'];
  constructor(private api:ApiService , private Active : ActivatedRoute) { }

  
  ngOnInit() {
    //this.dataSource.sort=this.sort;
    this.getAllData();

    this.employee = this.Active.snapshot.data['employee'];
    console.log(' in pagination component' , this.employee)
  }

  getAllData() {
    this.api.getEmployee().subscribe(res => {
      this.dataSource = res;
      console.log(res)
      
    })
  }

}
