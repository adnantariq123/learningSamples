    let result = "<tbody>";
    //let result;
    for(var i=0; i<filteredItems.length; i++) {
        
        result += "<tr>";

        loved = Object.values(filteredItems[i]);
        //console.log("loved onces :"+loved);

        for(var j=0; j<loved.length; j++){
            //console.log("did we come to myArray[i] :"+loved);
            result += "<td>"+loved[j]+"</td>";
        }

        
        result += "</tr>";
    }
    result += "</tbody>";
    return result;