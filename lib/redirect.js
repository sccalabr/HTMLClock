window.onload  = init()

function init() {
   console.log(document.URL)
    $.ajax({
      url: "https://api.imgur.com/3/account/me/",
      type: "GET",
      dataType: "json",
      success: function(string) {
         console.log(string)
         alert(string)
      },
      error: function(xhr, status, errorThrown) {
         console.log("I Failed :(!")
         alert(errorThrown)
      }
   });


}