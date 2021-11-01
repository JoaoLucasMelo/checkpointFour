import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";
import { loadStateHour, saveStateHour } from "../Utils/LocalStorage.js";

function _draw(){
let template = ''
let templateSub = ''
let templateAmPm = ''
let hrs = ProxyState.hours
let mins = ProxyState.minutes
let message = ProxyState.hourMessage
let ampm = ProxyState.ampm
template = document.getElementById('clock').innerHTML = `<p class="no-select clock stickyClock"><b>${hrs}:${mins < 10? '0' + mins : mins}</b></p>`
templateSub = document.getElementById('subclock').innerHTML = `<p class="no-select fst-italic  stickyClockMessage"><b>${message}</b></p>`
templateAmPm = document.getElementById('ampm').innerHTML = `<p class="no-select  stickyClockAmPm"><b>${ampm}</b></p>`
}

export class ClockController {
  constructor(){
    ProxyState.on('hours', _draw)
    ProxyState.on('minutes', _draw)
    ProxyState.on('hourType', saveStateHour)
    this.getTime()
    setInterval(this.getTime, 1000)
  }
getTime(){
clockService.getTime()
loadStateHour()
}

timeChange(){
  clockService.timeChange()
}


}