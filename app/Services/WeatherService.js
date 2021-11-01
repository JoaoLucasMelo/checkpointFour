import { ProxyState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { saveState } from "../Utils/LocalStorage.js";
import { Api } from "./AxiosService.js";




class WeatherService {
 async getWeatherInfo(){
   const res = await Api.get('weather')
   const weather = new Weather(res.data)
   ProxyState.weather = weather
 }
change(){
  if(ProxyState.weatherType == false){ ProxyState.weatherType = true}
  else {ProxyState.weatherType = false}
  saveState()
}

  
  
  
  
  
  }
  
  export const weatherService = new WeatherService()