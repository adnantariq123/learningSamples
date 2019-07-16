
/*
function Circle(radius) {
    this.radius = radius;
    this draw =  function () {
        console.log("Da Drawing";)
    }
}
THIS SAME OBJECT CAN BE WRITTEN LIKE THIS USING CLASS
*/

class Circle {
    constructor(radius) {
        this.radius = radius;
        //if you don't want to function to show up in the __proto__ then add the function here
        this.move = function () {
            console.log("moving");
        }

    }

    //notice that the draw () did NOT need the function key word in a class
    // also this goes to the __proto__ of the object
    draw() {
        console.log("Da Drawing");
    }
}




const c = new Circle(4);












