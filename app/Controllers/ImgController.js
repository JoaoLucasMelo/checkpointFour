import { imgService } from "../Services/ImgService.js";
import { ProxyState } from "../AppState.js";

function _draw(){
let template = ''
let template2 = ''
const img = ProxyState.img
template = document.getElementById('background').style.backgroundImage = `url('${img.imgLarge}')`
template = document.getElementById('background').style.backgroundSize = 'cover'
template2 = document.getElementById('imagecredits').innerHTML = `<p class="no-select text-light fst-italic m-0 fontUbuntu">Picture Author: ${img.author}</p>
<p class="no-select text-light fst-italic fontUbuntu">Category: ${img.query}</p>`

}

export class ImgController {
  constructor(){
    this.getImg()
    ProxyState.on('img',_draw)
  }
  async getImg(){
    try {
      await imgService.getImg()
    } catch (error) {
      console.error(error)
    }
  }
  new(){
    this.getImg()
  }
  
  
  
  
  
  
  
  
  
  
  }