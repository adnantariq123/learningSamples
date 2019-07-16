
// MIXINS GIVE US GREAT FLEXILIBIITY LEARN THIS!!!




const canEat = {
    eat: function () {
        this.hunger--;
        console.log('eating');
    }
};



const canWalk = {
    walk: function() {
        console.log("da walking!");

    }
};


const canSwim = {
    swim: function() {
        console.log("Swiming");
    }
}

// we did not neede this as the Object.assign would have also worked alone.
//const person = Object.assign({},canEat,canWalk);
//BUt this does to SHOW YOU THAT YOU CAN DO IT WITH A CONSTRUCTOR OBJECT 
function Person() {
    //this is the "BASE" constructor of the daPerson object
}



Object.assign(Person.prototype, canEat, canWalk);

const daPerson = new Person();
console.log(daPerson);


function GoldFish() {
    //this is the "BASE" constructor of the fishy object
}

Object.assign(GoldFish.prototype, canEat, canSwim);


const fishy = new GoldFish();
console.log(fishy);











