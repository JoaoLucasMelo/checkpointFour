import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";

function _draw(){
  if(ProxyState.weatherType == true){
  const weather = ProxyState.weather
  let template = weather.TemplateFar
  document.getElementById('weather').innerHTML = template
  } else if (ProxyState.weatherType == false){
    const weather = ProxyState.weather
    let template = weather.TemplateCel
    document.getElementById('weather').innerHTML = template
  }

}

export class WeatherController {
  constructor(){
    ProxyState.on('weather', _draw)
    ProxyState.on('weatherType', _draw)
    ProxyState.on('weatherType', saveState)
    this.getWeatherInfo()

    
  }
  
  async getWeatherInfo(){
    try {
      await weatherService.getWeatherInfo()
      loadState()
      _draw()
    } catch (error) {
      console.error(error)
    }

  }
  change(){
    weatherService.change()
  }
  
  
  
  
  
  
  
  
  
  
  
  }