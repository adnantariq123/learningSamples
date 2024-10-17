
const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

let x = document.getElementById("stuff");

const getData = () => {
    axios.get('https://reqres.in/api/users')
        .then(response => {
            console.log(response);
            x.innerHTML = makeTableHTML(response.data.data);
        });



};



const sendData = () => {

    axios.post('https://reqres.in/api/register', {
        // so even tho its an js object.. the post failed to send it across without the key-value-pais been in ""
        // in other words email and password HAD to be "email" "password"

        // ODDLY i could only pass eve.holt@reqres.in as it is a sudo-thingy.. whatever.. 
        //cause the https://reqres.in/api/register might be a fake thingy?
        // this was meant to happan as per the youtube https://www.youtube.com/watch?v=qM4G1Ai2ZpE
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }).then(response => {
        console.log(response);

        // fuck this part
        //x.innerHTML = makeTableHTML(response.config.data.email);  
    }).catch(err => {
        console.log(err);
    });
};




getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);












makeTableHTML = (myArray) => {
    let result = "<tbody>";
    //let result;
    for (var i = 0; i < myArray.length; i++) {

        result += "<tr>";



        // VERY IMPORTANT
        // look at what .entries does Vs .keys Vs .values  ... play with it ^^

        loved = Object.values(myArray[i]);
        console.log("loved onces :" + loved);

        for (var j = 0; j < loved.length; j++) {

            //if (loved.at(-1).includes("https")) {
            if (j === loved.length - 1) {
                result += "<td> <img src=" + loved[j] + "></td>"

            } else {
                result += "<td>" + loved[j] + "</td>";
            }

        }


        //THIS WORKS, But might not be the better appraoch 
        // result += Object.keys(myArray[i]).map(function(key) {
        // return ("<td>"+ myArray[i][key] + "</td>");
        // });


        result += "</tr>";
    }
    result += "</tbody>";
    //console.log("result : "+result);
    return result;
}



