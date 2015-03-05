window.onload  = init()

function init() {
   console.log(document.URL)
   console.log(location.hash.substring(1))
      var params = {}, queryString = location.hash.substring(1),
       regex = /([^&=]+)=([^&]*)/g, m;
   while (m = regex.exec(queryString)) {
     params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
   }
   console.log(params)
   // And send the token over to the server
   var req = new XMLHttpRequest();
   // consider using POST so query isn't logged
   req.open('GET', 'https://' + window.location.host + '/catchtoken?' + queryString, true);

   req.onreadystatechange = function (e) {
     if (req.readyState == 4) {
        if(req.status == 200){
          window.location = params['state']
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