import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { Api } from "./AxiosService.js"



class TodoService {
  async getTodos(){
    ProxyState.checked = 0
    ProxyState.count = 0
    const res = await Api.get('JohnMelo/todos')
    const todos = res.data.map( t => new Todo(t))
    todos.forEach(t=> ProxyState.count++)
    ProxyState.todo = todos
    this.task()

  }
  
  async createTodo(newtodo){
const res = await Api.post('JohnMelo/todos', newtodo)
const todo = new Todo(res.data)
ProxyState.todo = [...ProxyState.todo, todo]
ProxyState.count++
  }

  async removeTodo(id){
    await Api.delete('JohnMelo/todos/' + id)
    ProxyState.todo = ProxyState.todo.filter( t => t.id != id)
    ProxyState.count--
    this.getTodos()
    
  
  }
  async check(id){
    const todo = ProxyState.todo.find(t => t.id == id)
    todo.completed = !todo.completed
    const res = await Api.put('JohnMelo/todos/' + id, todo)
    ProxyState.todo = ProxyState.todo
    console.log(ProxyState.todo)
    if( todo.completed == true){
      ProxyState.checked++
    } else if ( todo.completed == false){
      ProxyState.checked--
    }
  }
  task(){
    let t = ProxyState.todo
    t.forEach(t=> t.completed? ProxyState.checked++ : '')
  }



}

  
  export const todoService = new TodoService()