import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})



export class WeatherService {

  URI: string;

  apiKey= '8547eaa304feed0087a50865e322b82d'

  constructor( private http: HttpClient ) {
    this.URI =`http://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;

  }

  getWeather(cityName: string, countryCode:string) {
    return this.http.get(`${this.URI}${cityName}, ${countryCode}`);
  }



}
