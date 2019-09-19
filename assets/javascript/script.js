$(document).ready(function () {

  // Global Variables 
  var buttonArray = ["The Boondock Saints", "The Terminator", "The Lion King", "Dumb and Dumber", "Pitch Black"];

  // Populate the buttons


  for (i = 0; i < buttonArray.length; i++) {
    var gifButton = $("<button>");
    gifButton.addClass("gifDisplay");
    gifButton.text(buttonArray[i]);
     gifButton.attr("data-movie", buttonArray[i]);
    $("#gifButtonArea").append(gifButton);
    console.log(gifButton);
  }
  // console.log(gifButton);
  // Add Ajax request to buttons






  // Ajax request

  

  $(".gifDisplay").on("click", function () {
    movies = $(this).attr("data-movie");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=d7NwVS7qh71bqzCyU6QtjQl8cLGSICEX&limit=10&q=" + movies;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var gifImage = response.data;

      

      
      
      // populate 10 gifs after clicking button
     for (i = 0; i < gifImage.length; i++ ){
      
     var insertGif = $("<img>");


     insertGif.attr("src", gifImage[i].images.fixed_height.url);
     insertGif.attr("src", gifImage[i].images.fixed_height_still.url);
     insertGif.attr("data-still", gifImage[i].images.fixed_height_still.url);
     insertGif.attr("data-animate", gifImage[i].images.fixed_height.url);
     insertGif.attr("data-state", "still");

    $(".gifArea").prepend(insertGif);

      console.log('button works');
    };
  })});









});