const items = [
  { namezz: "Bike", price: 100 },
  { namezz: "TV", price: 700 },
  { namezz: "Album", price: 10 },
  { namezz: "Book", price: 5 },
  { namezz: "Phone", price: 500 },
  { namezz: "Computer", price: 1000 },
  { namezz: "Keyboard", price: 25 }
];


makeTableHTML = (myArray) => {
    let result = "<tbody>";
    //let result;
    for(var i=0; i<myArray.length; i++) {
        
        result += "<tr>";

        

        // VERY IMPORTANT
        // look at what .entries does Vs .keys Vs .values  ... play with it ^^
        
        loved = Object.values(myArray[i]);
        //console.log("loved onces :"+loved);

        for(var j=0; j<loved.length; j++){
            //console.log("did we come to myArray[i] :"+loved);
            result += "<td>"+loved[j]+"</td>";
        }
        

        // THIS WORKS, But might not be the better appraoch 
        // result += Object.keys(myArray[i]).map(function(key) {
        // return ("<td>"+ myArray[i][key] + "</td>");
        // });

        
        result += "</tr>";
    }
    result += "</tbody>";
    //console.log("result : "+result);
    return result;
}


window.addEventListener("load", () => {
    document.getElementById('OriginalArray').innerHTML = makeTableHTML(items);
});





// get all items in array less than or equal to $100 price
const filteredItems =  items.filter((item) => {
    return item.price <= 100
})

console.log(filteredItems);




// map allows you to take an array and convert it into a new array that is slight different
const itemNames =  items.map((item) => {
    return item.namezz
})

console.log(itemNames);



// self explanotory 
const foundItem = items.find((item) => {
    return item.namezz ==='Book';
})

console.log("found the item using the .find method "+ foundItem);





items.forEach((item) => {
    console.log(item.namezz)
});


// this goes to check if the array has ANY items less than 100, if yes then it returns true
const inexpensiveItems = items.some((item) => {
    return item.price <= 100;
})

console.log(inexpensiveItems);




// So reduce method will take the array and bring it to a single value, with whatever maths you need it to do
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0) // 0 here was the starting value of currentTotal;

console.log(total);



const inclues



