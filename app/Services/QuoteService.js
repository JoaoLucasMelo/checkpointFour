import { Api } from "./AxiosService.js"
import { ProxyState } from "../AppState.js";
import { Quote } from "../Models/Quote.js";



class QuoteService {
async getQuotes(){
const res = await Api.get('quotes')
let quote = ProxyState.quote
quote = new Quote(res.data)
ProxyState.quote = quote

  
  
  
  
  }
  
  
  
  
  
  
  
  }
  
  export const quoteService = new QuoteService()