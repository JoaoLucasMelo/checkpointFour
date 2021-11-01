

export class Weather {
  constructor(data){
    this.temp = data.main.temp
    this.icon = data.weather[0].icon
    this.description = data.weather[0].description
    this.name = data.name
    this.weatherType = this.weatherType
  }
  get TemplateFar(){
    return`
    <div class="row card-body reveal">
      <div class="col-3 hide d-flex justify-content-center p-0 flex-column flex-nowrap">
        <p onclick="app.weatherController.change()" class="text-center  mb-0 selectable2 mdi mdi-24px mdi-spin mdi-cog"></p>
        <p class=" text-center mt-0 f-8"><b>C°</b></p>
      </div>
      <div class="col-9 d-flex ps-0 flex-column align-content-center">
        <h3 class="m-0  no-select align-self-center">${this.Far}°<span class="f-10">F</span></h3>
        <img class="align-self-center" height="42" width="46px" src="http://openweathermap.org/img/wn/${this.icon}@2x.png">
        <div class="text-center flex-nowrap  no-select mb-4 f-10 fst-italic">${this.description}</div>
      </div>
    </div>
`
}
get Far(){
  let far = ((this.temp-273.15)*1.8)+32
  return Math.floor(far)
}
get TemplateCel(){
  return`
  <div class="row card-body border-0  reveal">
  <div class="col-3 hide d-flex justify-content-center p-0 flex-column flex-nowrap">
    <p onclick="app.weatherController.change()" class="text-center mt-2 mb-0 selectable2 mdi mdi-24px mdi-spin mdi-cog"></p>
    <p class=" text-center mt-0 f-8"><b>F°</b></p>
  </div>
  <div class="col-9 d-flex p-0 flex-column align-content-center">
    <h3 class="m-0 align-self-center no-select">${this.Cel}°<span class="f-10">C</span></h3>
    <img class="align-self-center" height="42" width="46px" src="http://openweathermap.org/img/wn/${this.icon}@2x.png">
    <div class="text-center no-select flex-nowrap mb-2 f-10 fst-italic">${this.description}</div>
  </div>
</div>
`
}
get Cel(){
  let cel = this.temp-273.15
  return Math.floor(cel)
}

}
