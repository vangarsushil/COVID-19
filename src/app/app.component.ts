import { Component } from '@angular/core';
import {CoronaService}  from './services/corona.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'COVID-Nineteen';
  countries : any
  country : any
  confirmed :number
  recovered:number
  deaths:number

  constructor(private corona : CoronaService){ }

  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      console.log(data);
      this.countries=data;
    })
  }

  getCoronaData(){
    this.corona.getCoronaRealtimeData(this.country).subscribe((data)=>{
      console.log(data);
      var index = data.length -1
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.deaths = data[index].Deaths
      
    })
  }

  getCountry(country : any){
    this.country = country
  }
}
