import { ProxyState } from "../AppState.js"
import { Img } from "../Models/Img.js"
import { Api } from "./AxiosService.js"




class ImgService {

  async getImg(){
    const res = await Api.get('images')
    const img = new Img(res.data)
    ProxyState.img = img
  }
  
  
  
  
  
  
  
  }
  
  export const imgService = new ImgService()