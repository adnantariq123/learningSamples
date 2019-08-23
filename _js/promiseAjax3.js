function loadDoc(location) {
  return new Promise((resolve, reject) => {
    var xyz = new XMLHttpRequest();
    xyz.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        // resolving with empty object to avoid breaking other fetch if one failed
        resolve({});
      }
    };

    xyz.open("GET", location, true);
    xyz.send();
  });
}

const loadDocs = (paths) => Promise.all(paths.map(path => loadDoc(path))
  .then(results => {
    // combine all result into single object
    console.log(Object.assign({}, ...results));
    return Object.assign({}, ...results);
    
  }));

// example
loadDocs([
  "/_js/someitems.json",
  "/_js/someMoreItems.json"
]).then(function(finalCombinedObject) {
  // other logic here
});