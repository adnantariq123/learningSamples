const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 700 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 }
];


makeTableHTML = (myArray) => {
    //let result = "<tbody>";
    let result;
    for(var i=0; i<myArray.length; i++) {
        console.log("result : "+result);
        result += "<tr>";

        /*
        // THIS WORKS, But might not be the better appraoch 
        // IMP look at what .entries for us Vs .keys... play with it ^^
        loved = Object.entries(myArray[i]);
        //console.log("loved onces :"+loved);

        for(var j=0; j<loved.length; j++){
            //console.log("did we come to myArray[i] :"+loved);
            result += "<td>"+loved[j]+"</td>";
        }*/
        

        result += Object.keys(myArray[i]).map(function(key) {
        return ("<td>"+ myArray[i][key] + "</td>");
        });

        
        result += "</tr>";
    }
    result += "</tbody>";

    return result;
}


window.addEventListener("load", () => {
    document.getElementById('OriginalArray').innerHTML = makeTableHTML(items);
});





