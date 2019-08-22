

$( document ).ready(function() {
    console.log( "ready!" );

var result1;
var result2;
$.when(
    $.ajax({ // First Request
        url: "/_js/someitems.json", 
        method:"GET",
        success: function(data){     
                result1 = data; 
                //console.log(result1);                
        }           
    }),

    

    $.ajax({ //Seconds Request
        url: "/_js/someMoreItems.json", 
        method:"GET",
        success: function(data){                          
            result2 = data;     
        }           
    })

).then(function() {
    var newObj = [...result1.items, ...result2.items];
    // var newObj = {"items": []};
    // newObj.items = [...result1, ...result2];
    console.log(newObj);
});


});
