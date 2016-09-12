var request = require("request");

function printExampleHTML( cb ){

  request("http://www.example.com", function(err, response, body) {
    if (err) {
      throw err;
    }

    cb( body );
    //console.log("Response Status Code:", response.statusCode);
  });
}

printExampleHTML( function logHTML( htmlData ) {
  console.log( htmlData );
});
