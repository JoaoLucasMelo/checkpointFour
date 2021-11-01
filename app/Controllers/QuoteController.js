import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";

function _draw(){
  const quote = ProxyState.quote
  let template = ''
  template = quote.Template
  document.getElementById('quotes').innerHTML = template

}

export class QuoteController {
  constructor(){
    ProxyState.on('quote', _draw)
    this.getQuotes()
  }
  async getQuotes(){
  try {
    await quoteService.getQuotes()
  } catch (error) {
    console.error(error)
  }
}
  
  
  
  
  
  
  
  
  }