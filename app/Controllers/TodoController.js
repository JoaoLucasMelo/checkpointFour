import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { todoService } from "../Services/TodoService.js";

function _draw(){
  const todo = ProxyState.todo
  let template = ''
  todo.forEach(t => template += t.Template)
  document.getElementById('checktodo').innerHTML = template
  document.getElementById('complete').innerText = ` ${ProxyState.checked} | ${ProxyState.count}`
}

export class TodoController {
  constructor(){
  ProxyState.on('todo', _draw)
  ProxyState.on('count',_draw)
  ProxyState.on('checked',_draw)
  this.getTodos()

  }

  createTodo(){
window.event.preventDefault()
const formElem = window.event.target
const newTodo = {
  description: formElem.description.value
}
todoService.createTodo(newTodo)
formElem.reset()
  }
  async removeTodo(id){
    try {
      let result = await Swal.fire({
        title: 'Delete this To-do?',
        icon: 'question',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true,
      })
      if(result.isConfirmed){
        await todoService.removeTodo(id)
      } else {
        
      }
    } catch (error) {
      console.error(error)
    }
  }

async addTodo(id){
  try {
    await todoService.addTodo(id)
    
  } catch (error) {
    console.error(error);
  }
}
  async getTodos(){
    try {
      await todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  async check(id){
    try {
      await todoService.check(id)
    } catch (error) {
      console.error(error)
    }
  }
  
  
  
  
  
  
  
  
  
  
  }