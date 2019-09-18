$( document ).ready(function() {
  
  // Global Variables 
  var buttonArray = [];

// Ajax request

$(".button").on("click", function() {
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=d7NwVS7qh71bqzCyU6QtjQl8cLGSICEX&q=dog&limit=5";

   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var gifImage = response.data[1].images.original.url;
          var insertGif = $("<img>");
console.log(gifImage);
          // Setting the catImage src attribute to imageUrl
          insertGif.attr("src", gifImage);
          

          // Prepending the catImage to the images div
          $(".gifArea").prepend(insertGif);
          console.log('button works');
    });
  });

 


  




});
