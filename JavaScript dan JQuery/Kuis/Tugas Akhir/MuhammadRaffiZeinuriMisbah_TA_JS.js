$(document).ready(function() {
    // Inisialisasi TEma
    var theme = "dark";
    // Mengubah Tema
    $("#temaBtn").click(function() {
        if (theme === "dark") {
            // Pindah ke tema Light
            $(document.body).addClass("light-theme").removeClass("dark-theme");
            $('#containerJudul').addClass("light-theme").removeClass("dark-theme");
            $('#containerTheme').addClass("light-theme").removeClass("dark-theme");
            $('#temaBtn').addClass("light-theme").removeClass("dark-theme");
            $('#search-input').addClass("light-theme").removeClass("dark-theme");
            $('#search-button').addClass("light-theme").removeClass("dark-theme");
            $('#searchText').addClass("light-theme").removeClass("dark-theme");
            $('.card-title').addClass("light-theme").removeClass("dark-theme");
            $(this).text("Light");
            theme = "light";
        } else {
            // Pindah ke tema Dark
            $(document.body).removeClass("light-theme").addClass("dark-theme");
            $('#containerJudul').removeClass("light-theme").addClass("dark-theme");
            $('#containerTheme').removeClass("light-theme").addClass("dark-theme");
            $('#temaBtn').removeClass("light-theme").addClass("dark-theme");
            $('#search-input').removeClass("light-theme").addClass("dark-theme");
            $('#search-button').removeClass("light-theme").addClass("dark-theme");
            $('#searchText').removeClass("light-theme").addClass("dark-theme");
            $('.card-title').removeClass("light-theme").addClass("dark-theme");
            $(this).text("Dark");
            theme = "dark";
        }
    });
    var API_KEY = "b4f6a39e22d1672b54773b7a7f01d1ed";
    // Menampilkan Movie Yang Popular
    $.ajax({
        url: "https://api.themoviedb.org/3/movie/popular",
        data: {
            api_key: API_KEY,
        },
        success: function(data) {
            var results = data.results;
            $("#results").empty();

            for (var i = 0; i < results.length; i++) {
                var movie = results[i];
                var imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

                var card = '<div class="col-md-2 mb-4">';
                card += '<div class="card border-0 bg-transparent">';
                card += '<img src="' + imageUrl + '" class="card-img-top" alt="' + movie.title + '">';
                card += '<div class="card-body">';
                card += '<h6 class="card-title dark-theme">' + movie.title + '</h6>';
                card += '<p class="card-text">Release Date : ' + movie.release_date;
                card += '<p class="card-text">Language : ' + movie.original_language;
                card += '<p class="card-text">Vote Average : ' + movie.vote_average;
                card += '<p class="card-text">Popularity : ' + movie.popularity;
                card += '</div></div></div>';

                if (movie.poster_path !== null) {
                    $("#results").append(card);
                }
            }
        },
        error: function() {
            console.error('Failed to fetch data from TMDB API');
        }
    });
    $("#search-button").click(function() {
        if ($('#search-input').val().length == 0) {
            return swal("", "Please Entry Your Movie's Name", "warning");
        } else {
            var searchText = $("#search-input").val();
            $.ajax({
                url: "https://api.themoviedb.org/3/search/movie",
                data: {
                    api_key: API_KEY,
                    query: searchText
                },
                success: function(data) {
                    var results = data.results;
                    $("#results").empty();

                    for (var i = 0; i < results.length; i++) {
                        var movie = results[i];
                        var imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

                        var card = '<div class="col-md-2 mb-4">';
                        card += '<div class="card border-0 bg-transparent">';
                        card += '<img src="' + imageUrl + '" class="card-img-top" alt="' + movie.title + '">';
                        card += '<div class="card-body">';
                        card += '<h6 class="card-title">' + movie.title + '</h6>';
                        card += '<p class="card-text">Release Date : ' + movie.release_date;
                        card += '<p class="card-text">Language : ' + movie.original_language;
                        card += '<p class="card-text">Vote Average : ' + movie.vote_average;
                        card += '</div></div></div>';
                        if (movie.poster_path !== null) {
                            $("#results").append(card);
                        }
                    }
                },
                error: function() {
                    console.error('Failed to fetch data from TMDB API');
                }
            });
        }

    });
    $('.card').hover(function() {
        $(this).addClass('hovered');
    }, function() {
        $(this).removeClass('hovered');
    });
});