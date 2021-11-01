


export class Quote{
constructor(data){
  this.content = data.content
  this.author = data.author
}
get Template(){
  return`
  <div >
  <p class=" f-12 card-title no-select transparent">“${this.content}”</p>
  </div>
  <div class=" hide">
  <p class="f-8  card-title no-select transparent">- ${this.author}</p>
  </div>
  `
}
}