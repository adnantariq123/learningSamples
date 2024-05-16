<script>

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'

const fetchAPI = async () => {
    setTimeout (async ()=>{
    const responce = await fetch(BASE_URL)
    const formatResponce = await responce.json()

    return formatResponce
    },2000)

}


// this function is VERY POWERFUL. it is sorting the array based on the property .userID 
// This array is coming from an API call
const makeObectDifferentArray = (simplyArray) => {
    //make a blank object
    const arrayByCategory = {}

    // 'loop' threw that array we got from the api
    simplyArray.map(question => {
        //if question HAS that userId then make an array and push that object.. C 0 0 L!
        if (arrayByCategory.hasOwnProperty (question.userId)) {
            //arrayByCategory.userId = question.userId
            arrayByCategory[question.userId].push(question)
        }
        else
        arrayByCategory[question.userId] = [question]
    });

    return arrayByCategory;            
}


const makeDiv =(key, formmatedArray)=>{
    console.log(key)
    console.log(formmatedArray)

    const userIdDiv =document.createElement("div");
    userIdDiv.classList.add("category");
    

    const h3 = document.createElement("h3")
    h3.innerText = "User ID : " + key

    userIdDiv.appendChild(h3)

    formmatedArray.map(item=>{
        const title = document.createElement("p")
        title.classList.add("pFormat")
        title.innerText = item.title.substring(0, 30);
        userIdDiv.appendChild(title)
    })

    return userIdDiv
}



const callingAll = async ()=>{
    const allTheData = await fetchAPI()
    const ObjWithUniqueArray = makeObectDifferentArray(allTheData)

    //console.log(ObjWithUniqueArray)

    for (const [key, value] of Object.entries(ObjWithUniqueArray)) {
        const divless = makeDiv(key, value)
        //console.log(`${key}: ${value}`);
        wrapper.append(divless)
    }



}

callingAll()

</script>
