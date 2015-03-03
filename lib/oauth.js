window.onload = init();
var json = {};
function init(json) {
	json["response_type"] = "token"
        json["client_id"] = "20mgxfvougr4gxt"
	json["redirect_uri"] = "https://ec2-54-149-124-168.us-west-2.compute.amazonaws.com/"
}

function login() {
      $.ajax({
      url: "https://api.dropbox.com/1/account/info",
      data: {},
      type: "GET",
      dataType: "json",
      success: function(json) {
	    window.alert("sometext");
      },
      error: function(xhr, status, errorThrown) {
         console.log("I Failed :(!")
         alert(errorThrown)
      }
   });
}


