import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input() value= "test";
  valueLocal = '';
  constructor() { 
    console.log('Constructor called');
  }

  ngOnChanges(change:SimpleChanges){
    console.log('ngOnchanges Called');
    // console.log(change);
  }
  ngOnInit() {
    console.log('ngOninit called');
    this.valueLocal = 'HI Everyone';
    // console.log(this.valueLocal);
    // console.log(this.value);
  }
  ngDoCheck(){
    console.log('Do check Called')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentinit called');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOndestroy called');
  }

}
