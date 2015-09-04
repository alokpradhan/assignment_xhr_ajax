// $(document).ready(function(){
//   // var xhr = new XMLHttpRequest();
//   // xhr.addEventListener( "load", function(){
//   //     console.log( this.responseText )
//   // });
//   // xhr.open("POST", "http://reqr.es/api/users", true);
//   // xhr.send("first_name=foo&last_name=bar");

//   var xhr = new XMLHttpRequest();
//   xhr.addEventListener( "load", function(){
//       console.log( this.responseText )
//   });
//   xhr.open("GET", "http://reqr.es/api/users/?first_name=something", true);
//   xhr.send();
// })

var MyjQuery = MyjQuery || {};

MyjQuery.$ = (function(){

  function ajax(arg) {
    var url, method, async, dataType;
    var dataQuery = '';
    var xhr;

    if (typeof arg !== "object") {
      console.log("Error");
    } else {

      xhr = new XMLHttpRequest();
      // set url
      url = arg["url"] ? arg["url"] : window.location.href;
      // set type of reques
      method = arg["method"] ? arg["method"] : 'GET';
      // set whether asynchronous
      async = arg["async"] ? arg["async"] : true;

      dataType = arg["dataType"] ? arg["dataType"] : "json";

      if (typeof arg["data"] === "object" && Object.keys(arg["data"]) > 0) {
        if (arg["method"] == 'POST') {
          for (var key in arg["data"]) {
            dataQuery += key + '=' + arg["data"][key];
          }
        } else {
          url += '/' + arg["data"]["id"];
          for (var key in arg["data"]) {
            if (key !== 'id') {            
              dataQuery += key + '=' + arg["data"][key];
            }
          }
        }
      }

      // xhr.onreadystatechange = function () {
      //   if (xhr.readyState === 4) {
      //     arg["complete"]();
      //   }
      // }

      if (arg["error"]) {
        xhr.addEventListener( "error", arg["error"], false);
      }

      if (arg["success"]) {
        xhr.addEventListener( "load", arg["success"], false);
      }

      if (arg["complete"]) {
        xhr.addEventListener( "error", arg["complete"], false);
        xhr.addEventListener( "load", arg["complete"], false);
      }

      xhr.open(method, url, async);

      // Set headers if there is any
      if (arg["headers"]) {
        for (var key in arg["headers"]) {
          xhr.setRequestHeader(key, arg["headers"][key]);
        }
      }

      xhr.send(dataQuery);
    }
  }

  function get(url, options) {
    var arg = {
      url: url,
      method: "GET"
    };
    if (typeof options === "object") {
      for (var key in options) {
        arg.key = options.key;
      }
    } else {
      console.log("The input options must be an Object!")
    }
    ajax(arg);
  }

  function post(url, options) {
    var arg = {
      url: url,
      method: "POST"
    };
    if (typeof options === "object") {
      for (var key in options) {
        arg.key = options.key;
      }
    } else {
      console.log("The input options must be an Object!")
    }
    ajax(arg);
  }

  return {
    ajax: ajax,
    get: get,
    post: post
  };

})();

$(document).ready(function(){
  // MyjQuery.$.ajax({
  //   url: "http://reqr.es/api/users",
  //   data: {},
  //   method: "GET",
  //   success: function() { console.log("success") },
  //   error: function() { console.log("error") },
  //   complete: function() { console.log("complete") }
  // });

  MyjQuery.$.get("http://reqr.es/api/users", {
    success: function() { console.log("success1") },
    error: function() { console.log("error1") },
    complete: function() { console.log("complete1") }
  });
})

