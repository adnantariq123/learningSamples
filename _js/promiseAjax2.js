

function myLoadDoc(location) {
  return new Promise(function (resolve, reject) {

    var xyz = new XMLHttpRequest();

    xyz.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var wut = JSON.parse(this.responseText);
        wut = wut.items;
        resolve(wut);
      }
    };
    xyz.open("GET", location, true);
    xyz.send();
  });
}

const urls = [
  "/_js/someitems.json", 
  "/_js/someMoreItems.json"
]

Promise.all(urls.map(
  url => myLoadDoc(url))
  ).then(responses =>

  console.log(responses)
  //console.log(typeof responses)
)