import { Component, HostListener, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { filter, find, map, take } from 'rxjs/operators'
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private _commonService:CommonService){

  }
  title = 'Class 5 of Angular training';
  valueFromChild:any;
  array1 = [1,2,3,4,5];
  array2 = ['A','B','C','D'];

  // myObservable = new Observable((observer)=>{
  //   console.log('Observable starts from here');
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);

  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);

  //   setTimeout(() => {
  //     observer.error(new Error('something went wrong'));
  //   }, 3000);

  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
   
  // });

  // myObservable = of(this.array1, this.array2);

  myObservable = from(this.array1);

  transformObservable = this.myObservable.pipe(
    map((val)=>{
      return val*5; // 5 10 15 20 25
    }), 
    filter((val)=>{
      return val > 10; // 15 20 25
    }),
    take(1) //15
  );

  filterObservable = this.transformObservable.pipe(filter((val)=>{
    return val > 15
  }));

  findObs = this.transformObservable.pipe(find((val)=>{
    return val > 10;
  }));

  takeObs = this.transformObservable.pipe(take(3));

  IntervalObs = interval(1000);

  intervalSubscription:any;
  ngOnInit(): void {
    // this.myObservable.subscribe(

    // (val)=>{ //next, error,complete
    //   console.log(val);
    // },

    // (err)=>{
    //   alert(err.message);
    // },

    // ()=>{
    //   console.log('your stream of data has finished.');
    // }
    // );

    // this.intervalSubscription= this.IntervalObs.subscribe((val)=>{
    //   console.log(val);
    //   if(val>=5){
    //     this.intervalSubscription.unsubscribe();
    //   }
    // },
    // ()=>{
    //   console.log('your map stream of data has finished.');
    // });

    this.transformObservable.subscribe((val)=>{
      console.log(val);
    })
  }




  messageFromChild(event:Event){
    console.log(event);
    this.valueFromChild = event;
  }
}
