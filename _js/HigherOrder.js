

function loadDoc() {
    var xyz = new XMLHttpRequest();
    xyz.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        //document.getElementById("demo").innerHTML = this.responseText;
        //console.log(this.responseText);
        makingObj (this.responseText);
    }
    };
    xyz.open("GET", "/_js/someitems.json", true);
    xyz.send();
}

loadDoc();


makingObj =(stuffy)=> {
    //console.log(stuffy);
    //console.log(stuffy.constructor.name);

    const madeObj = JSON.parse(stuffy);

    //document.getElementById("demo").innerHTML =  madeObj.items.pr
    //console.log(madeObj);
    //console.log(madeObj.constructor.name);    
    //return madeObj;


    /* nothing wrong with this code, BUT we can divide this even more! very cool
    let expensiveItems = madeObj.items.filter(function (madeObj) {
        return madeObj.price >= 100;
    })
    console.log(expensiveItems);
    */

    let ALLexpensive = function (madeObj) {
        //console.log(madeObj);
        return madeObj.price >= 100;
    }


    

    let expensiveItems = madeObj.items.filter(ALLexpensive);
    // so here we are getting all items which are expensive.. for future make only thier names show up
    console.log(expensiveItems);


    /*this did not work for you ... sad face :(
    let CheapItems = madeObj.items.reject(madeObj);
    console.log(CheapItems);
    */


}



