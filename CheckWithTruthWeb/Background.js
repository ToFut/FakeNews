
chrome.tabs.executeScript( {
    // This chrome.tabs take selected text from user and call to httpGet
    code: "window.getSelection().toString();"
}, function(selection) {
    alert(selection[0]);
    httpGet(selection[0])
});

function httpGet(selectedText)
{
    // This httpGet send req to server with the url we want to take info about reliability Information
    var theUrl = 'http://localhost/fake?id=' + selectedText;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
            alert(xmlHttp.responseText);
        }
    };
    xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
    xmlHttp.send();
}
