// Define a function that'll show a movie's details if we have them, or fetch and show them if we don't have them yet.
function show_movie_details() {

  // Grab our movie object
  var movie = $(this);


  // If the movie element has the "expanded" class, then we're already showing its data.
  // So if it's been clicked, then the user is trying to hide the details.
  // So hide those details!
  if ( movie.hasClass("expanded") ) {

    movie
      .removeClass("expanded")
      .find(".movie-details-content").slideUp(200);


  // Check if we've already fetched the data for this movie.
  // If we have, we can simply reveal that data!
  } else if ( movie.data("checked") ) {

    movie
      .addClass("expanded")
      .find(".movie-details-content").slideDown(200);


  // If we're here, then we don't have data for this movie yet.
  // So let's fetch it!
  } else {

    // Set our flag to show that we've fetched this movie's details (so we don't check for it twice).
    // Also add the "expanded" class.
    movie
      .data("checked", "true")
      .addClass("expanded");

    // Append a new section to the .movie-details div, where we'll put the data that we fetch.
    // Also add a "loading" spinner gif.
    movie.find(".movie-details")
      .append("<div class='movie-details-content'></div>")
      .find(".movie-details-top").append("<img src='http://blimpage.com/pants/ajax-loader-222.gif' class='movie-details-loading'>");

    // Grab the movie's IMDB ID, which is stored as a data- attribute.
    var movie_imdb_id = movie.data("imdb-id"),

    // Grab the div where we'll drop the details that we fetch.
        movie_details = movie.find(".movie-details-content");

    // Make an AJAX call to the Open Movie Database, to grab this movie's details.
    $.get("http://www.omdbapi.com/?i=" + movie_imdb_id)

      // If the AJAX call was successful, let's process that data!
      .done( function( movie_data ) {

        // Remove the "loading" spinner.
        movie.find(".movie-details-loading").remove();

        // Drop some pieces of data onto the page, and slide the div open so we can see them.
        movie_details.html(
          "<h3>" + movie_data.Title + " (" + movie_data.Year + ")</h3>" +
          "<p><strong>Genre: </strong> " + movie_data.Genre + "</p>" +
          "<p><strong>Director: </strong> " + movie_data.Director + "</p>" +
          "<p><strong>Starring: </strong> " + movie_data.Actors + "</p>" +
          "<p><strong>Released: </strong> " + movie_data.Released + "</p>" +
          "<p><strong>Plot: </strong> " + movie_data.Plot + "</p>"
        ).slideDown(200);
      })

      // If the AJAX call was unsuccessful, display an error message.
      .fail( function() {
        movie_details.text("Sorry, something went wrong!")
    });

  }
}

// When a movie is clicked, run our function to get its details.
$("#movies .movie").on("click.movie", show_movie_details);
