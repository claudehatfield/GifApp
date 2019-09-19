$( document ).ready(function() {
  
  // Global Variables 
  var buttonArray = ["The Boondock Saints", "The Terminator", "The Lion King", "Dumb and Dumber", "Pitch Black"];

// Populate the buttons

 
  for (i = 0; i < buttonArray.length; i++){
    var gifButton = $("<button>");
  gifButton.addClass("gifDisplay");
  gifButton.text(buttonArray[i]);
  $("#gifArea").append(gifButton);
  }




// Ajax request



$(".button").on("click", function() {
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=d7NwVS7qh71bqzCyU6QtjQl8cLGSICEX&q=dog&limit=5";

   $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var gifImage = response.data[2].images.original.url;
          var insertGif = $("<img>");
          
          console.log(gifImage);
          
          insertGif.attr("src", gifImage);
          
          $(".gifArea").prepend(insertGif);
          
          console.log('button works');
    });
  });

 


  




});
