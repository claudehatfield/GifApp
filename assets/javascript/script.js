$( document ).ready(function() {
  
  // Global Variables 
  

// Ajax request

$(".button").on("click", function() {
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=d7NwVS7qh71bqzCyU6QtjQl8cLGSICEX&tag=poop";

   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      var gifImage = response.data.image_original_url;
          var insertGif = $("<img>");

          // Setting the catImage src attribute to imageUrl
          insertGif.attr("src", gifImage);
          

          // Prepending the catImage to the images div
          $(".gifArea").prepend(insertGif);
          console.log('button works');
    });
  });

 


  




});
