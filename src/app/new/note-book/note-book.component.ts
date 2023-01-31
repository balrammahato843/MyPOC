import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss'],
})
export class NoteBookComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor is called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngonchanges called ' + changes['myvalue'].currentValue);
  }

  @Input() myvalue: any;

  counter: any;
  num: any = 0;

  ngOnInit(): void {
    console.log('ngOnInit is called');
    // this.counter = setInterval(() => {
    //   this.num += 1;
    //   console.log(this.num);
    // }, 1000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheack is called');
  }
  ngAfterContentInit(): void {
    console.log('ngafterContaint init is called');
  }
  ngAfterContentChecked(): void {
    console.log('ngAftreContentcheacked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterview cheacked called');
  }
  ngOnDestroy(): void {
    clearInterval(this.counter);
    console.log('Destroy method called');
  }
}
