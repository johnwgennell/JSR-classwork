// Lets create a movie app that will accept a search and return a list of results
/*

1) Accept a query from the user and get results. (All via AJAX)
2) I want it to display the results by outputting the movie posters as image tags
3) Upon interacting with the movie poster (click, mouseover, etc..) you should display 4 extra pieces
  of information about that movie. I don't care which
4) Bonus: Display a total of 8 pieces of information about the movie
5) Bonus: Do a type ahead so that the form works as autocomplete.
6) Bonus: Make it pretty


Example endpoint: http://www.omdbapi.com/?i=tt3896198&apikey=ada5c403

*/

'use strict';
var MovieApp = {};

$(function() {
// This is where you register your event listeners
     $('#movie_form').submit(function(event){
         event.preventDefault();
         var input = $('#movie_search').val();
         var request = $.ajax({
             url:'http://www.omdbapi.com/',
             data: {s: input, apikey:"ada5c403"}
         });

     request.done(function(data){
         console.log(data.Search);
         var movies = data.Search;
         for(var i=0; i<movies.length; i++) {

           var image = movies[i].Poster;
           var $html = $('<a class="image" data-year="'+movies[i].Year+'" data-title="'+movies[i].Title+'" data-type="'+movies[i].Type+'"><img src="'+image+'"/></a>');
           $('body').append($html);
           }
     });
     $.get("http://www.omdbapi.com/?i=" + movie_imdb_id)

      .done( function( movie_data ) {

        movie_details.html(
          "<h3>" + movie_data.Title + " (" + movie_data.Year + ")</h3>" +
          "<p><strong>Genre: </strong> " + movie_data.Genre + "</p>" +
          "<p><strong>Director: </strong> " + movie_data.Director + "</p>" +
          "<p><strong>Starring: </strong> " + movie_data.Actors + "</p>" +
          "<p><strong>Released: </strong> " + movie_data.Released + "</p>" +
          "<p><strong>Plot: </strong> " + movie_data.Plot + "</p>"

    });
     $('body').on('click','.image', function() {
        $('#title').html($(this).data('title'));
        $('#year').html($(this).data('year'));
        // to fill below
        $('#type').html($(this).data('type'));


  });
});
