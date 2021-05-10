$(document).ready(function() {
    const baseURL = 'https://nine-shared-text.glitch.me/movies';
    let allMovies = [];
    let title = $("#title");
    let rating = $("#ratingGrade");
    let genre = $("#genre");
    let year = $("#year");
    let minutes = $("#minutes");

//======INITIAL GET==========//
    fetch(baseURL)
        .then(response => response.json())
        .then(response => {
            $("#after").css("display", "flex");
            $("#load").fadeOut(300);
            allMovies = response;
            showMovies(allMovies);
            canRemove();
            canEdit();
        });

    //======RECALL THE MOVIES WITH THE EDITED VERSION OF ALL MOVIES ARRAY=======//
    function recallGet() {
        fetch(baseURL)
            .then(response => response.json())
            .then(response => {
                $("#after").css("display", "flex");
                $("#load").fadeOut(300);
                allMovies = response;
                console.log(allMovies);
                canRemove();
                canEdit();
            });
    }


    //========POST===============//
    const newMovie = (movie) => fetch(`${baseURL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            $(".movieSection").innerHTML += render(data);
            return data;
        })
        .catch(console.error);


//============= PUT==EDIT==============//


    const editMovie = movie => fetch(`${baseURL}/${movie.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
        .then(res => res.json())
        .then(data => {
            console.log(`Success: edited ${JSON.stringify(data)}`);
        })
        .catch(console.error);


//===================DELETE==============//
    const deleteMovie = (id) => fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()
    ).then(() => {
        recallGet();
        console.log(allMovies);
        console.log(`Success, deleted movie ${id}`);
    }).catch(error => console.log(error));










//=============OTHER FUNCTIONS=================//


    function showMovies(arr){
        for(let i = 0; i < arr.length; i++){
            $(".movieSection")[0].insertAdjacentHTML("afterbegin", render(arr[i]));
        }
    }



    function createMovie(i1, i2, i3){
        let newMovie = {
            title: i1,
            rating: i2,
            genre: i3,
        }
        return newMovie
    }

    function render(data){
        return `<div class="movieCard" data-string="${data.genre} ${data.title} ${data.year}">
        <span id="forDelete">${data.id}</span>
        <button class="Edit">Edit</button>
        <button class="delete">Remove</button>
        <h4 class="titleOnPoster">${data.title}</h4>
        <img src="${data.poster}" class="poster" alt="posterMissing">
        <p>Rated: ${data.rating}</p>
        <p>Genre: ${data.genre}</p>
        <p>${data.minutes} minutes</p>
        <p>Year: ${data.year}</p>
        <button class="Trailer"><a href="${data.trailer}" target="_blank">Click Here for Trailer</button>
        </div>`;
    }



    $("#submit").on("click", function (){
        newMovie(createMovie(title.val(), rating.val(), genre.val(), year.val(), minutes.val())).then(data => {
            $(".movieSection")[0].insertAdjacentHTML("afterbegin", render(data));
        });
        $(this).parent().css("display", "none");
        $("#displayForm").css("display", "flex");
    });


    function canRemove() {
        $("body").on("click", ".delete", function () {
            deleteMovie($(this).parent().children().first()[0].innerText).then();
            $(this).parent().remove();
        });
    }


    function canEdit() {
        $("body").on("click", ".Edit", function () {
            let newId = $(this).parent().children().first()[0].innerText;
            let card = $(this);
            let newMovieObj = {};
            $("#changeMovie").on("click",function(){
                let newTitle = $("#changeTitle").val();
                let newGenre = $("#changeGenre").val();
                let newRating = $("#changeRating").val();
                newMovieObj = {
                    title: newTitle,
                    genre: newGenre,
                    rating: newRating,
                    id: newId
                }
                editMovie(newMovieObj);
                card.parent().html(render(newMovieObj));
                $("#edit").css("display", "none");
            });
            $("#closeEdit").on("click", function (){
                $("#edit").css("display", "none");
            });
            $("#edit").css("display", "flex");

        });
    }


    $("#displayForm").on("click", function (){
        $("#formSection").css("display", "flex");
        $(this).css("display", "none");
    });

    $(".filter").on("keyup", function() {
        var input = $(this).val().toUpperCase();

        $(".movieCard").each(function() {
            if ($(this).data("string").toUpperCase().indexOf(input) < 0) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    });



//    var moviesSection = document.querySelector(".movieSection")
// moviesSection.removeChild(moviesSection.children[2])
});







// MOVIE HTML

// <!doctype html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//             <meta name="viewport"
//                   content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
//                     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
//                         <link rel="stylesheet" type="text/css" href="css/movie-app.css">
//                             <title>Movie App</title>
//     </head>
//     <body>
//
//         <!--NAVBAR HEADER-->
//         <header>
//             <nav class="navbar navbar-dark bg-dark">
//                 <form class="form-inline">
//                     <input class="form-control mr-sm-2" type="search" placeholder="50 First Searches" aria-label="Search">
//                         <button class="btn btn-outline-light" type="submit" id="clickButton">Select to Search</button>
//                 </form>
//             </nav>
//         </header>
//
//
//         <!--<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">-->
//         <!--    <div class="carousel-inner">-->
//         <!--        <div class="carousel-item active">-->
//         <!--&lt;!&ndash;            <img src="..." class="d-block w-100" alt="...">&ndash;&gt;-->
//         <!--        </div>-->
//         <!--        <div class="carousel-item">-->
//         <!--&lt;!&ndash;            <img src="..." class="d-block w-100" alt="...">&ndash;&gt;-->
//         <!--        </div>-->
//         <!--        <div class="carousel-item">-->
//         <!--&lt;!&ndash;            <img src="..." class="d-block w-100" alt="...">&ndash;&gt;-->
//         <!--        </div>-->
//         <!--    </div>-->
//         <!--    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">-->
//         <!--        <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
//         <!--        <span class="sr-only">Previous</span>-->
//         <!--    </a>-->
//         <!--    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">-->
//         <!--        <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
//         <!--        <span class="sr-only">Next</span>-->
//         <!--    </a>-->
//         <!--</div>-->
//
//         <!--CAROUSEL WITHIN ACCORDION -->
//         <div class="container" id="accordion">
//             <div class="genre-card" id="comedy">
//                 <!--        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg">-->
//                 <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <!--            <img src="..." class="d-block w-100" alt="...">-->
//                         </div>
//                         <div class="carousel-item">
//                             <!--            <img src="..." class="d-block w-100" alt="...">-->
//                         </div>
//                         <div class="carousel-item">
//                             <!--            <img src="..." class="d-block w-100" alt="...">-->
//                         </div>
//                     </div>
//                 </div>
//                 <div class="card-header"></div>
//             </div>
//             <div class="genre-card" id="drama">
//                 <!--        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/False_alarm_-a.jpg/1280px-False_alarm_-a.jpg">-->
//                 <img id="dramaGenre" src="" />
//                 <div class="card-header"></div>
//             </div>
//             <div class="genre-card" id="romance">
//                 <!--        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Neugierige-Katze.JPG/1280px-Neugierige-Katze.JPG">-->
//                 <div class="card-header"></div>
//             </div>
//             <div class="genre-card" id="animation">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Al_acecho_%289272124788%29.jpg/1280px-Al_acecho_%289272124788%29.jpg">
//                     <div class="card-header"></div>
//             </div>
//             <div class="genre-card" id="all">
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Mimi%26Tigsi.jpg/1280px-Mimi%26Tigsi.jpg">
//                     <div class="card-header"></div>
//             </div>
//         </div>
//         <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
//         <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
//         <script src="js/keys.js"></script>
//         <script src="js/movie-app.js"></script>
//     </body>
// </html>

// MOVIE CSS

// body {
//     margin: 0;
//     min-height: 100vh;
//     background: #000;
//     font-family: sans-serif;
// }
//
// .container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 10vmin;
//     overflow: hidden;
//     transform: skew(5deg);
// }
//
// .genre-card {
//     flex: 1;
//     transition: all 1s ease-in-out;
//     height: 75vmin;
//     position: relative;
// }
// .card-header {
//     color: black;
//     background: rgb(109, 255, 30);
//     padding: 0.5em;
//     transform: rotate(-90deg);
//     transform-origin: 0% 0%;
//     transition: all 0.5s ease-in-out;
//     min-width: 100%;
//     text-align: center;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     font-size: 1em;
//     white-space: nowrap;
// }
// .genre-card:hover {
//     flex-grow: 10;
// }
// img {
//     filter: grayscale(0);
// }
// .card-header {
//     text-align: center;
//     top: calc(100% - 2em);
//     color: white;
//     background: rgba(0, 0, 0, 0.5);
//     font-size: 2em;
//     transform: rotate(0deg) skew(-5deg);
// }
// img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: all 1s ease-in-out;
//     filter: grayscale(100%);
// }
// img:not(:nth-child(5)) {
//     margin-right: 1em;
// }
// #clickButton{
//     border: 3px solid;
//     border-radius: 20px;
//     background-image: url("../img/50-first-lei.jpg");
// }


// MOVIE JS

// "use strict";
// filter by title, genre etc.
// Enter a movie title and search
//Title
//Review Rating
//Delete option for movies

// const url = "https://nine-shared-text.glitch.me/movies"
// console.log(url);
//
//
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": url,
//     "method": "GET"
// }
//
// $.ajax(settings).done(function (response) {
//     console.log(response);
//
//     var content = response.movies[5].poster;
//     $("#dramaGenre").append(content);
// });

//
// $(document).ready(function() {
//
//     const url = "https://nine-shared-text.glitch.me/movies"
//     console.log(url);
//
// fetch(url).then( response => {
//     response.json().then( movies => {
//         movies.forEach( movie  => {
//             // do something with the username login
//             console.log(movie.poster);
//         });
//     });
// });
//     $.ajax(url,function(x) {
//         console.log(x);
//         console.log(x.movies.length);
//
//         for(var i = 0; i<3; i++){  //As my carousel contains only 3 images
//             $('.active').attr("src",url.movies[i].poster);
//         }
//
//     });
// });

//
// fetch(url).then( response => {
//     response.json().then( movies => {
//         movies.forEach( movie  => {
//             // do something with the username login
//             console.log(movie.poster);
//         });
//     });
// });