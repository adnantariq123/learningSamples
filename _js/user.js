export default class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}


function printName(user) {
    console.log(`User name is ${user.name}`)
}


function printAge (user) {
    console.log(`${user.name} is ${user.age} years old`)
}


/*
typically we would do this in React `EXPORT DEFAULT... BUT we 
do not have to as we defined it right on TOP with the class Defination.. look up!
export default User;


Notice the functions printName, printAge was not export as it was not a part of the class.. so add them ^-^
*/

export {printName, printAge}
