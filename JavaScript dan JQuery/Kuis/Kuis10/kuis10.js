$(document).ready(function() {
    var API_KEY = "b4f6a39e22d1672b54773b7a7f01d1ed";

    $("#search-button").click(function() {
        var searchText = $("#search-input").val();

        $.ajax({
            url: "https://api.themoviedb.org/3/search/movie",
            data: {
                api_key: API_KEY,
                query: searchText
            },
            success: function(data) {
                var results = data.results.slice(0, 10); // Hanya menampilkan 10 film pertama
                $("#results").empty();

                for (var i = 0; i < results.length; i++) {
                    var movie = results[i];
                    var imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

                    var card = '<div class="col-md-2 mb-4">';
                    card += '<div class="card">';
                    card += '<img src="' + imageUrl + '" class="card-img-top" alt="' + movie.title + '">';
                    card += '<div class="card-body">';
                    card += '<h6 class="card-title">' + movie.title + '</h6>';
                    card += '<p class="card-text">Release Date : ' + movie.release_date;
                    card += '</div></div></div>';

                    $("#results").append(card);
                }
            },
            error: function() {
                console.error('Failed to fetch data from TMDB API');
            }
        });
    });
});