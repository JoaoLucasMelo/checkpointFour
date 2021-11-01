import { ProxyState } from "../AppState.js";
import { saveStateHour } from "../Utils/LocalStorage.js";



class ClockService {

  getTime(){
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  
if (hrs > 12 && ProxyState.hourType == true){
    ProxyState.hours = hrs - 12
  } else if (hrs == 0 && ProxyState.hourType == true) { ProxyState.hours = 12}
  else{
    ProxyState.hours = hrs
  }
  ProxyState.minutes = mins 
  if(hrs < 6 ){ ProxyState.hourMessage = 'Good Night!'}
  else if (hrs < 12 ){ ProxyState.hourMessage = 'Good Morning!'}
  else if (hrs < 18 ){ ProxyState.hourMessage = 'Good Afternoon!'}
  else if (hrs < 24 ){ ProxyState.hourMessage = 'Good Evening!'}

  if(ProxyState.hourType == true){
    if(hrs < 12) {ProxyState.ampm = 'AM'}
    else if( hrs < 24) {ProxyState.ampm = 'PM'}
  } else if (ProxyState.hourType == false) {
    ProxyState.ampm = ''
  }
}
timeChange(){
  if(ProxyState.hourType == false){ ProxyState.hourType = true}
  else {ProxyState.hourType = false}
saveStateHour()
}

} 

export const clockService = new ClockService()