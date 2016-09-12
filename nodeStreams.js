var http = require("http");

function printExampleHTML( cb ){
  var responseBody = "";

  var requestOptions = {
    host: "example.com",
    path: "/"
  };

  http.get(requestOptions, (response) => {    // HTTP Response Callback

    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", function(data) {           // On Data Received
      responseBody += data;
    });

    response.on("end", function() {                // On Data Completed
      cb( responseBody );
    });

  });
};

printExampleHTML( function (exampleHTML) {
  console.log( exampleHTML );
});