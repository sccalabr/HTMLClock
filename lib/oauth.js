window.onload = init();
function init(json) {
   console.log(json["client_id"])
   console.log(json["type"])
   console.log(json["callback_function"])
   console.log(json["redirect_url"])


}

function login() {
var client = new Dropbox.Client({key: "20mgxfvougr4gxt"});

// Try to finish OAuth authorization.
client.authenticate({interactive: false}, function (error) {
    if (error) {
        alert('Authentication error: ' + error);
    }
});

if (client.isAuthenticated()) {
    // Client is authenticated. Display UI.
    window.alert("sometext");
}


}