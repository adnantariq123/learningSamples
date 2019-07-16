

class Shape {
    constructor(color) {
        this.color = color;
    }

    move() {
        console.log("moving from da orginal");
    }    
}
// useless example no need, put just to show we could do this as well
const wastedShape= new Shape("black");


class Circle extends Shape {
    
    draw () {
        console.log ("Drawing");
    }
    move() {
        console.log ("moveing from Circle");
    }
}

const c = new Circle("blue");


/* We are EXTENDING the Circle(in the lower example we have SecondCircle ) class from the base Shape class.   
 Now this SecondCircle class needed ANOTHER parameter with the SAME name as the parent class (take color as example) we need 
 to set it up with SUPER keyword or it would breakafter testing we learnt we have to set the super for the 'color' 
anyways if we are to add more parameters
*/

class SecondCircle extends Shape {
    constructor (color, radius) {
        super (color);
        this.radius = radius;
    }

}

const c2 = new SecondCircle("ppp", 4);


