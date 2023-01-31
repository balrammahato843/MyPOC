import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit,OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked ,OnDestroy{


  constructor() {
    console.log("constructor running")
  }
  @Input() myvalue:any
 counter: any;
 number: any=0;
  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges running")
  }
  ngOnInit(): void {
    console.log("ngOnInit running")
   this.counter = setInterval(()=>{
    this.number = this.number + 1;
    console.log(this.number)
    },1000)
  }
  ngDoCheck(): void {
      console.log("ngDoCheak running")
  }
  ngAfterContentInit(): void {
      console.log("ngAfterContentInit running")

  }
ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked running")
}
ngAfterViewInit(): void {
    console.log("ngAfterViewInit running")
}
ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked running")
}
ngOnDestroy(): void {
  clearInterval(this.counter)
    console.log("ngOnDistroy running")
}
dist(){
  clearInterval(this.counter)
}
}
