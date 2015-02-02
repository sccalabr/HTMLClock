window.onload = getTemp();
function getTemp() {

   $.ajax({
      url: "https://api.forecast.io/forecast/0401928fcd4a0d65bc87e1d01a153c09/35.300399,-120.662362?callback=?",
      data: {},
      type: "GET",
      dataType: "json",
      success: function(json) {
        // console.log("I WAS SUCCESSFUL!")
       //  console.log(json["daily"]["summary"])
       //  console.log(json["daily"]["icon"])
       //  console.log("img/" + json["daily"]["icon"] + ".png")
       //  console.log(json["daily"]["temperatureMax"])
        // console.log(json["daily"]["data"][0]["temperatureMax"])
         
         $("#forecastLabel").html(json["daily"]["summary"])
       //  console.log($("#forecastIcon").attr("src"))
         $("#forecastIcon").attr("src", "img/" + json["daily"]["icon"] + ".png")
       //  console.log($("#forecastIcon").attr("src"))
         
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

function showAlarmPopUp() {
  // console.log("showAlarmPopUp")
   $("#mask").removeClass("hide")
   $("#popup").removeClass("hide")
}

function hideAlarmPopUp() {
   //console.log("hideAlarmPopUp")
   $("#mask").addClass("hide")
   $("#popup").addClass("hide")
}

function addAlarm() {
   var hours = $("#hours option:selected").text()
   var mins = $("#mins option:selected").text()
   var ampm = $("#ampm option:selected").text()
   console.log($("#alarmName"))
   var alarmName = $("#alarmName").val() + " "
   //console.log("ADD ALARM: " + hours + " " + mins + " " + ampm + " =>" + alarmName)
/*   
   insertAlarm(hours, mins, ampm, alarmName) 
   hideAlarmPopUp()
*/   
   var AlarmObject = Parse.Object.extend("Alarm");
   var alarmObject = new AlarmObject();
     alarmObject.save({"time": time,"alarmName": alarmName}, {
     success: function(object) {
       console.log("getAllAlarms Success")
       console.log(object)
       insertAlarm(object["hours"], object["mins"], object["ampm"], object["alarmName"])
       hideAlarmPopup() 
     }
   });

}

function insertAlarm(hours, mins, ampm, alarmName) {
   console.log("insertAlarmPopUp")
   console.log(hours + " " + mins + " " + ampm + " " + alarmName)
   
   //console.log("#mask" + $("#mask").html())
  
   $("#mask").addClass("hide")
   console.log($("#mask").hasClass("hide"))
   
   $("#popup").addClass("hide")
   console.log($("#popup").hasClass("hide"))
   
   var div = document.createElement("div");
   $(div).addClass("flexable")
   console.log($(div).hasClass("flexable"))
   
   var div2 = document.createElement("div");
   $(div2).addClass("name")
   $(div2).html(alarmName)
   
   var div3 = document.createElement("div");
   $(div3).addClass("time")
   $(div3).html(" " +  hours + ":" + mins + ampm);

   $(div).append(div2)
   $(div).append(div3)
   $("#alarms").append($(div))
   
   console.log("alarms " + $("#alarms").html())
   console.log("div " + $(div).html())
   console.log("div2 " +$(div2).html())
   console.log("div3 " +$(div3).html())
}

function getAllAlarms() {
   console.log("getAllAlarms")
   Parse.initialize("apWKb4OIUYzyMki7S8KLGLM9w1lhhGUhBZsXC322", "ahKIZyhAtZ30ZHI4uuFNPlXRAmL9Rm2bIDkXR1j4")

   var AlarmObject = Parse.Object.extend("Alarm");
       var query = new Parse.Query(AlarmObject);
       query.find({
           success: function(results) {
               for (var i = 0; i < results.length; i++) { 
                   insertAlarm(results[i].time, results[i].alarmName);
               }
           }
         });
    //this may not go here, ask jay.

   //$(document).load(getAllAlarms);
}

$(this).load(getAllAlarms);