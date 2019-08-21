

class Human {
    constructor() {
        this.gender="anything";
    }

    printGender = () => {
        console.log("The gendder is :" + this.gender);
    }
}


class Person extends Human {
    constructor(name,sex,age) {
        super();
        this.name = name;
        this.gender = sex;
        this.age = age;
    }

    printMyName = () => {
        console.log(this.name);
    }

    printMyAge = () => {
        console.log(this.name + " is " + this.age + " years old \n");
    }    


}

const daPerson = new Person("Adi", "male",39);

const oriana =  new Person("Oriana", "female", 35);


daPerson.printMyName();
daPerson.printGender();
daPerson.printMyAge();

console.log("\n\n\n");
oriana.printMyName();
oriana.printGender();
oriana.printMyAge();

// very very cool extends is awesome for class





// SO WE JUST USED THE ... ON AN OBJECT.. very cool!!
// and i don't THINK it like classes as much but you can use the spread operator on objects as well
//so it TOOK whatever you defined for daPerson and distrubuting it in another object AND added the hasWiredSkin propety 
const Alien = {
    ...daPerson,
    hasWiredSkin: "Green Skin"

}

console.log(Alien);


//now i are fuckign confused
// basically this shit is calling the function `filter` and then check if the arguments which 
//are an array thanks to the spread operator ...
// AND then only returns IF it matches the value on the right side of the `===` which here is 1
const filter = (...args) =>{
    return args.filter(el => el ===1);
}

console.log(filter(1,2,3))

// the above example was pretty cool ^_^




const xyzNumbers = [11,2222,3,4,5];
// ... this shit is called Spread operators : "and it is used to split(split is not the right word, 
//it also makes) up array elements or object properties" Max
const newNumbers = [...xyzNumbers,100];


const daDouble = newNumbers.map((xyz)=> {
    return xyz * 2;
})



console.log(newNumbers + "this is extra or the new array newNumbers");

console.log("we need to use the .map function to get those doubles : " + daDouble);

///something seomthing destructing
// SO! we made an array const numbers = [1,2,3,4,5]; and thenusing them []
//we made two vars with the first two values of the array numbers .. 
[num1, num2] = xyzNumbers;

console.log("The var num1's value is :" + num1);
console.log("AND The var num2's value is :" + num2);













