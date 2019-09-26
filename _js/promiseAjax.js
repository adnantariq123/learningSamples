
var myFuncCalls = 0;

let promiseAjax = new Promise (function ( resolve,reject) {


    function loadDoc(location) {
        myFuncCalls++;
        console.log("loadDoc was called :" + myFuncCalls);



        var xyz = new XMLHttpRequest();
        xyz.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText)
                resolve(this.responseText);          
            }
        };
    
        xyz.open("GET", location, true);
        xyz.send();
    }

    loadDoc("/_js/someitems.json");
    // loadDoc("/_js/someMoreItems.json"); IGNORE THIS FOR NOW.. for to files look at the promiseAjax2.js file
})


promiseAjax.then(function (fromResolve){

    // JSON.parse(fromResolve);
    var newObj = JSON.parse(fromResolve);
    console.log(newObj);

})






