$( document ).ready(function() {
  


var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=d7NwVS7qh71bqzCyU6QtjQl8cLGSICEX";

   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

  });