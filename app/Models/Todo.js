import { generateId } from "../Utils/generateId.js"




export class Todo{
  constructor(data){
    this.id = data.id
    this.completed = data.completed || false
    this.user = data.user
    this.description = data.description 
  }
  
  
    get Template(){
    return`
    <div class="form-check">
    <input onclick="app.todoController.check('${this.id}')" class="form-check-input" ${this.completed ? 'checked' : ''} type="checkbox" value="false" id="flexCheckDefault">
    <div class="row mb-2">
    <div class="col-10">
    <label class="form-check-label " for="flexCheckDefault">${this.completed? '<del>' : ''}${this.description}${this.completed? '</del>' : ''}</label>
    </div>
    <div class="col-2">
    <a title="Delete Sticky Note" class="button selectable "
      onclick="app.todoController.removeTodo('${this.id}')"><i class="text-secondary mdi mdi-delete-circle"></i></a>
      </div>
      </div>
    </div>
    `
  }
}
