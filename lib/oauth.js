object = {client_id:"a6a848f70d9c127", token:"token", callback_function:"callBackFunction" };

function init(json) {
   object["client_id"] = json["client_id"]
   object["type"] = json["type"]
   object["callback_function"] = json["callback_function"]
   
}

function callBackFunction(token) {
      console.log(token + "============")
      $.ajax({
      url: "https://api.imgur.com/3/account/me/",
      type: "GET",
      beforeSend: function (xhr) {
          xhr.setRequestHeader ("Authorization", "Bearer " + token);
      },
      dataType: "json",
      success: function(string) {
      console.log(string["data"]["url"])
      alert('Welcome ' +  string["data"]["url"])
      },
      error: function(xhr, status, errorThrown) {
      console.log("I Failed :(!")
      console.log(errorThrown)
      alert(errorThrown)
      }
      });
}

function login() {
   console.log("https://api.imgur.com/oauth2/authorize?client_id=" +object["client_id"]+ "&response_type=" +object["token"] + "&state=1234&callback=" + object["callback_function"])
      $.ajax({
      url: "https://api.imgur.com/oauth2/authorize?client_id=" +object["client_id"]+ "&response_type=" +object["token"] + "&state=1234&callback=" + object["callback_function"],
      type: "GET",
      dataType: "text",
      success: function(string) {
         window.open("https://api.imgur.com/oauth2/authorize?client_id=" +object["client_id"]+ "&response_type=" +object["token"] + "&state=1234")
         console.log("HI")
      },
      error: function(xhr, status, errorThrown) {
         console.log("I Failed :(!")
         alert(errorThrown)
      }
   });
}


