import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-prefetch',
  templateUrl: './prefetch.component.html',
  styleUrls: ['./prefetch.component.scss']
})
export class PrefetchComponent implements OnInit {
  courseName: any;

  constructor(private activatedRoute : ActivatedRoute) { }

  // mocking the api call
  ngOnInit(): void {
    // timer(5000).pipe(map( ()=>
    // {return 'Angular';
    // }))
    // .subscribe((data) =>
    // {
    //   this.courseName = data;
    // });
  
  this.activatedRoute.data.subscribe((data) =>
  {
    console.log(data)
    this.courseName = data['courseData'];
  } )
  
  
  
  }

}
