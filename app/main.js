import { ClockController } from "./Controllers/ClockController.js";
import { ImgController } from "./Controllers/ImgController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodoController } from "./Controllers/TodoController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
clockController = new ClockController()
todoController = new TodoController()
quoteontroller = new QuoteController()
imgController = new ImgController()
weatherController = new WeatherController()
}

window["app"] = new App();
