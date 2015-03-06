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
   console.log("=====")
   window.opener.callBackFunction(params['access_token'])
   window.close();
}