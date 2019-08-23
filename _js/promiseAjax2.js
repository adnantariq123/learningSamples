

function loadDoc(location) {
    return new Promise (function ( resolve,reject) {
      var xyz = new XMLHttpRequest();
      xyz.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          resolve(this.responseText);          
        }
      };
      xyz.open("GET", location, true);
      xyz.send();
    });
  }
  
  const urls = ["/_js/someitems.json", "/_js/someMoreItems.json"]
  Promise.all(urls.map(url=>loadDoc(url))).then(responses =>
    
    console.log(responses)
  )