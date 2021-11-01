import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Todo').Todo[]} */
todo = []
  /** @type {import('./Models/Weather').Weather} */
weather = null
weatherType = true
  /** @type {import('./Models/Img').Img} */

img = null
hours = 12
minutes = null
hourType = true
hourMessage = ''
ampm = ''
  /** @type {import('./Models/Quote').Quote} */
quote = null
count = 0
checked = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
