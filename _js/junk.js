function loadDoc(location, callback) {
    var xyz = new XMLHttpRequest();
    xyz.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            this.responseText;

            callback.apply(xyz);
        }
    };

    xyz.open("GET", location, true);
    xyz.send();
}



function makeCombinationTwo() {
    var combine1;
    var combine2;

    var c1, c2;

    loadDoc("/_js/someitems.json", function () {
        // "this" is the XHR object here! ...in your nutcase example it is xyz ;-)
        combine1 = this.responseText;

        // have to use the localStorage to pass the varaible outside this functional scope :(
        localStorage.combine1 = combine1;
    });

    c1 = localStorage.getItem("combine1");
    combine1 = makeObj(c1).items;

    console.log(combine1);

    loadDoc("/_js/someMoreItems.json", function () {

        combine2 = this.responseText;

        localStorage.combine2 = combine2;
    });

    c2 = localStorage.getItem("combine2");
    combine2 = makeObj(c2).items;

    console.log(combine2);

    var newObj = { ...combine1, ...combine2 };
    console.log(newObj);

//    return newObj;

}





function makeObj(a) {
    return JSON.parse(a);
}



makeCombinationTwo();