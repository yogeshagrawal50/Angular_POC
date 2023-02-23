import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName:string = '';
  weatherForecastData:any;

  constructor(private _commonService:CommonService, private _weather:WeatherService) { }

  ngOnInit(): void {
    this._weather.getWeatherForecast('delhi').subscribe((val)=>{
      this.weatherForecastData = val;
   });
  }
  alertBox(){
   this._commonService.alertBoxMessage()
  }

  onSubmit(){
    this._weather.getWeatherForecast(this.cityName).subscribe((val)=>{
       this.weatherForecastData = val;
    },
    (error)=>{
      alert(error.error.message);
    }
    );
  }
}
