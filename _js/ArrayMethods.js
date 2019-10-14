const items = [
  { namezz: "Bike", price: 100 },
  { namezz: "TV", price: 700 },
  { namezz: "Album", price: 10 },
  { namezz: "Book", price: 5 },
  { namezz: "Phone", price: 500 },
  { namezz: "Computer", price: 1000 },
  { namezz: "Keyboard", price: 25 }, 
  { namezz: "chair", price: 45 }
];


// this function is great!
// you will use it twice... first for the initial display of arrays. and second after you filter by the price
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






// map allows you to take an array and convert it into a new array that is slight different
const itemNames =  items.map((item) => {
    return item.namezz
})

console.log("items.map : " +itemNames);



// self explanotory 
const foundItem = items.find((item) => {
    return item.namezz ==='Book';
})

console.log("found the item using the .find method "+ foundItem.namezz);





items.forEach((item) => {
    console.log("Using .forEach " +item.namezz)
});


// this goes to check if the array has ANY items less than 100, if yes then it returns true
const inexpensiveItems = items.some((item) => {
    return item.price <= 100;
})

console.log("inexpensive Items : " +inexpensiveItems);




// So reduce method will take the array and bring it to a single value, with whatever maths you need it to do
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0) // 0 here was the starting value of currentTotal;

console.log(total);


/*
does not work with an array full of object, RATHER it would work with a `simple` array with just numbers
const includesTwo = items.includes(100);

console.log(includesTwo);

*/


displaylowerPriceDate = () => {  
    const value = document.getElementById("inputValue").value
    //console.log("value :"+ value);
    
    document.getElementById("showStopper").innerText = value;
    

    // get all items in array less than or equal to $100 price
    const filteredItems =  items.filter((item) => {
    return item.price <= value
})

;
let x = document.getElementById("modalBodyP");
// VERY COOL where you didn't have to write the function again, just sent another parameter, in the lower sample filteredItems to make the table
x.innerHTML = makeTableHTML(filteredItems);
}



//grab value from input and return all array items less than the value
document.getElementById("lowerPrice").addEventListener("click", displaylowerPriceDate);


simple = [1,2,4,6,7,89,3,2,5];

findHighestVal = (myArr) => {
    let x =0;
    for(i=0; i<=myArr.length; i++) {
        if(myArr[i] >= x){
            x = myArr[i];
        }
    }
    return x;
}

console.log( findHighestVal(simple));

let justPrice = items.map((item) => {
    return item.price
})

console.log(justPrice);

console.log( "findHighestVal " + findHighestVal(justPrice));


// findLowestVal = (myArr) => {
//     let x =0;
//     for(i=0; i<=myArr.length; i++) {
//         if(myArr[i] >= x){
//             x = myArr[i];
//         }
//     }
//     return x;
// }

console.log("lowest value is :" + Math.min(...simple));

console.log("lowest value is :" + Math.min(...justPrice));



// this last one I just added to shwo the power of MAP and HOW to make new object with new keys using the same old values
const justXyz = items.map(xyz=> (
    { newnew :xyz.namezz, price : (xyz.price *2 ), onShelf: "yes" }));

console.log(justXyz);