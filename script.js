// $(document).ready(function(){
//   // var xhr = new XMLHttpRequest();
//   // xhr.addEventListener( "load", function(){
//   //     console.log( this.responseText )
//   // });
//   // xhr.open("POST", "http://reqr.es/api/users", true);
//   // xhr.send("first_name=foo&last_name=bar");

//   // var xhr = new XMLHttpRequest();
//   // xhr.addEventListener( "load", function(){
//   //     console.log( this.responseText )
//   // });
//   // xhr.open("GET", "http://reqr.es/api/users", true);
//   // xhr.send("id=2");
// })

var MyjQuery = MyjQuery || {};

MyjQuery.$ = (function(){

  var ajax = function (arg) {
    var url, method, async;
    var dataQuery = '';

    if (typeof arg !== "object") {
      console.log("Error");
    } else {

      var xhr = new XMLHttpRequest();
      // set url
      url = arg[url] ? arg[url] : window.location.href;
      // set type of reques
      method = arg[type] ? arg[type] : 'GET';
      // set whether asynchronous
      async = arg[async] ? arg[async] : true;

      if (arg[type] == 'POST') {
        for (var key in arg[data]) {
          dataQuery += key + '=' + data[key];
        }
      }

      xhr.open(method, url, async);
      xhr.send(dataQuery);
    }

  };

  return {
    ajax: ajax
  };

})();

$(document).ready(function(){
  MyjQuery.$.ajax({
  url: "http://reqr.es/api/users",
  data: {id: 2},
  type: "GET"
});

