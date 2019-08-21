function get(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // defensive check
            if (typeof callback === "function") {
                // apply() sets the meaning of "this" in the callback
                callback.apply(xhr);
            }
        }
    };
    xhr.send();
}
// ----------------------------------------------------------------------------


var param = "http://example.com/";                  /* do NOT use escape() */
var finalUrl = "http://RESTfulAPI/info.json?url=" + encodeURIComponent(param);

// get() completes immediately...
get(finalUrl,
    // ...however, this callback is invoked AFTER the response arrives
    function () {
        // "this" is the XHR object here!
        var resp = JSON.parse(this.responseText);

        // now do something with resp
        alert(resp);
    }
);