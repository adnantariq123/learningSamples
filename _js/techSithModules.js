
//import {add, subtract} from "./libA.js"; this would fine, but if you want to bring in ALL of them then use the next line
import * as libA from "./libA.js";
import mult from "./LibB.js";
import Car from  "./libC.js";

console.log(libA.add(10,5));


console.log(libA.subtract(10,5));


console.log(libA.incrementNum(100));


console.log(mult(1111,5));

let mazda = new Car("crappy car");

console.log(mazda.name);
