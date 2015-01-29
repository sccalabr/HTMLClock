window.onload = getTemp();
function getTemp() {

   $.ajax({
      url: "https://api.forecast.io/forecast/0401928fcd4a0d65bc87e1d01a153c09/35.300399,-120.662362?callback=?",
      data: {},
      type: "GET",
      dataType: "json",
      success: function(json) {
         console.log("I WAS SUCCESSFUL!")
         console.log(json["daily"]["summary"])
         console.log(json["daily"]["icon"])
         console.log("img/" + json["daily"]["icon"] + ".png")
         console.log(json["daily"]["temperatureMax"])
         console.log(json["daily"]["data"][0]["temperatureMax"])
         
         $("#forecastLabel").html(json["daily"]["summary"])
         console.log($("#forecastIcon").attr("src"))
         $("#forecastIcon").attr("src", "img/" + json["daily"]["icon"] + ".png")
         console.log($("#forecastIcon").attr("src"))
         
         var temp = json["daily"]["data"][0]["temperatureMax"]
         
         if(temp >= 90) {
            $("body").addClass("hot")
         }
         else if(temp >= 80) {
            $("body").addClass("warm")
         }
         else if(temp >= 70) {
            $("body").addClass("nice")
         }
         else if(temp >= 60) {
            $("body").addClass("chilly")
         }
         else {
            $("body").addClass("cold")
         }
      },
      error: function(xhr, status, errorThrown) {
         console.log("I Failed :(!")
         alert(errorThrown)
      }
   });
}