function add (a,b) {
    return a+b;
}

const subtract = (a,b) => {
    return a-b;
}

//let numbb =1;

let incrementNum =(hhh) => {
    //return hhh++; will not work, so break it into two lines
    hhh++;
    return hhh;
}

//YOU NEED this for functions
export {add, subtract, incrementNum }