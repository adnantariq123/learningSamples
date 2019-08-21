
function loadDoc(location, callback) {
    var xyz = new XMLHttpRequest();
    xyz.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
            this.responseText;

        //console.log(this.responseText)
        //makesomething(this.responseText);
        callback.apply(xyz);
        
        }
    };

    xyz.open("GET", location , true);
    xyz.send();
   
}


/* loadDoc() completes immediately... You are dealing with an asynchronous function call here. 
Results are handled when they arrive, not when the function finishes running.
That's what callback functions are for. They are invoked when a result is available*/

/*
loadDoc("/_js/someitems.json",
    // ...however, this callback is invoked AFTER the response arrives
    function () {
    xxx= returningData;
    
    // right now it is a string
    console.log(xxx);
    console.log(typeof xxx);
    console.log("\n\n");


    const madeObj = JSON.parse(xxx);
    // and because you used the JSON.parse it is NOW an object and you can dig deeper into the object notations like .items
    console.log(madeObj.items);
    console.log(typeof madeObj);

    // because the whole fucking thing xxx is simply an array it actually made an object of ALL the characters... useless
    // const makeUseLessObj = {...xxx};
    // console.log(makeUseLessObj);
    // console.log(typeof makeUseLessObj);
    //commented out good for example

    console.log("\n\n");
    const anotherObj = {...madeObj};
    console.log(anotherObj.items);
    console.log(typeof anotherObj);


    // did not work...
    // console.log("\n\n");
    // const makeArr = [...madeObj.items];
    // console.log(makeArr);
    // console.log(typeof makeArr);    


} );
*/



let combine1;
let combine2;


loadDoc("/_js/someitems.json",
function () {
    // "this" is the XHR object here! ...in your nutcase example it is xyz ;-)
    combine1 = JSON.parse(this.responseText);
        //console.log(combine1.items);
    }
);

console.log(combine1);

loadDoc("/_js/someMoreItems.json",
function () {
    // "this" is the XHR object here! ...in your nutcase example it is xyz ;-)
    combine2 = JSON.parse(this.responseText);
        //console.log(combine2.items);
    }
);


function makeCombinationTwo () {

    newObj = {...combine1, ...combine2};
    //return newObj;
    //console.log(combine1);
}

makeCombinationTwo();
// console.log("did you make two : " + makeCombinationTwo() );