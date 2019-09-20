$(document).ready(function () {
  // Global Variables 
  var buttonArray = ["The Boondock Saints", "The Terminator", "The Lion King", "Dumb and Dumber", "Top Gun", "Bad News Bears", "Hocus Pocus"];

  // Populate the buttons
  createButton();
  displayGif();

  function createButton() {

    $("#gifButtonArea").empty();
    for (i = 0; i < buttonArray.length; i++) {

      var gifButton = $("<button>");
      gifButton.addClass("gifDisplay");
      gifButton.text(buttonArray[i]);
      gifButton.attr("data-movie", buttonArray[i]);
      $("#gifButtonArea").append(gifButton);
      console.log(gifButton);
    }
  }

  // Ajax request



  function displayGif() {
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
        for (i = 0; i < gifImage.length; i++) {

          var insertGif = $("<img class='gif'>");
          var rating = gifImage[i].rating;
          var ratingArea = $("<p>").text("Rating: " + rating);

          // adding attributes to make images still
          insertGif.attr("src", gifImage[i].images.fixed_height.url);
          insertGif.attr("src", gifImage[i].images.fixed_height_still.url);
          insertGif.attr("data-still", gifImage[i].images.fixed_height_still.url);
          insertGif.attr("data-move", gifImage[i].images.fixed_height.url);
          insertGif.attr("data-state", "still");
          // add both rating and gif to area
          $(".gifArea").prepend(ratingArea);
          $(".gifArea").prepend(insertGif);

        }
      

      // functionality to change the state of image on click
      $(".gif").on("click", function () {
        var state = $(this).attr("data-state");

        if (state === "still") {
          $(this).attr("src", $(this).attr("data-move"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });

    });
  });
  }


  // creates a new button from user input
  $("#newButton").on("click", function (event) {

    event.preventDefault();
    var newButton = $("#movieName").val();
    console.log(newButton);
    $("#movieName").val("");
    buttonArray.push(newButton);
    console.log(buttonArray);

    createButton();
    displayGif();
  });

  


});