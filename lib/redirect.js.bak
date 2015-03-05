window.onload  = init()

function init() {
   console.log("===")
   console.log(document.URL)
   console.log(location.hash.substring(1))
      var params = {}, queryString = location.hash.substring(1),
       regex = /([^&=]+)=([^&]*)/g, m;
   while (m = regex.exec(queryString)) {
     params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
   }
   console.log(params)
      $.ajax({
      url: "https://api.imgur.com/3/account/me/",
      type: "GET",
      headers: {'Authorization: Bearer': params["access_token"]},
      dataType: "json",
      success: function(string) {
      console.log(string)
      alert(string)
      },
      error: function(xhr, status, errorThrown) {
      console.log("I Failed :(!")
      console.log(errorThrown)
      alert(errorThrown)
      }
      });


}