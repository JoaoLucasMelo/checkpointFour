import { ProxyState } from "../AppState.js";

export function saveState(){
  
  localStorage.setItem('weathertype', JSON.stringify({
    weatherType: ProxyState.weatherType
}))

localStorage.setItem('hourtype', JSON.stringify({
  hourType: ProxyState.hourType
}))
}
export function saveStateHour(){
  
localStorage.setItem('hourtype', JSON.stringify({
  hourType: ProxyState.hourType
}))
}

export function loadState(){

  let data = JSON.parse(localStorage.getItem('weathertype'))
  if(data != null){
    ProxyState.weatherType = data.weatherType
  }
  
}
export function loadStateHour(){

  let data = JSON.parse(localStorage.getItem('hourtype'))
  if(data != null){
    ProxyState.hourType = data.hourType
  }
  
}