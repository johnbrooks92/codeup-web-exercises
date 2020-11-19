
$(document).ready(function (){


    let markerPos = [];
    let start = [-98.150363, 29.700665];
    const baseOffset = 21600;

    mapboxgl.accessToken = mapboxToken;
    let mapObj = ({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        center: start,
        zoom: 8,
    });
    let map = new mapboxgl.Map(mapObj);

    let initialMarker = {
        draggable: true,
        color: "#6fef13"
    }

    let marker = new mapboxgl.Marker(initialMarker)
        .setLngLat(start)
        .addTo(map)

    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        minLength: 1,
        marker: {
            color: "black"
        }
    });

    geocoder.on("result", function(e){
        markerPos[0] = e.result.center[0]
        markerPos[1] = e.result.center[1]
        getWeather();
    });

    map.addControl(geocoder);

    function updateMarkerMain(){
        let location = marker.getLngLat();
        markerPos[0] = (location.lng);
        markerPos[1] = (location.lat);
        getWeather();
    }

    marker.on("dragend", updateMarkerMain);


    let search = document.getElementById("search");
    let cord = [];
    let otherMarker = {
        draggable: true,
        color: "#9b33db"
    }



    window.addEventListener("keydown", function (e){
        if(e.key === "Enter"){
            if(search.value.length > 0){
                searchArea();
                search.value = "";
            }
        }
    });

    function updateMarkerSecond(){
        let location = searchedMarker.getLngLat();
        markerPos[0] = (location.lng);
        markerPos[1] = (location.lat);
        getWeather();
    }

    let searchedMarker = new mapboxgl.Marker(otherMarker);

    function searchArea(){
        geocode(search.value, mapboxToken).then((r) => {
            searchedMarker.setLngLat(r).addTo(map);
            cord[0] = r[0];
            cord[1] = r[1];
            map.flyTo({
                center: r,
                zoom: 10,
                speed: 1,
                curve: 1
            });
            markerPos = cord;
            getWeather();
        });
    }

    searchedMarker.on("dragend", updateMarkerSecond);


    //Calls Data form API for Forecast
    function getWeather(){
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            appid: openWeatherApi,
            lat: markerPos[1],
            lon: markerPos[0],
            exclude: "minutely, hourly, alerts, current",
            units: "imperial"
        }).done((data) => {
            let coordinates = {
                lat: data.lat,
                lng: data.lon
            }
            console.log(data);
            $("#time").html(clockTime(data.current.dt + data.timezone_offset + baseOffset));

            reverseGeocode(coordinates, mapboxToken).then((result) => {
                $("#cityName").text(result);
            });

            weatherSpot[0].innerHTML = "";

            for (let i = 0; i < data.daily.length; i++) {
                weatherSpot[0].innerHTML += forecast(data, i);
            }
        })
    }

    //Info For Weather Location
    let weatherSpot = document.getElementsByClassName("weatherSection");

    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: openWeatherApi,
        lat: 29.700665,
        lon: -98.150363,
        exclude: "minutely, hourly, alerts, current",
        units: "imperial"
    }).done((data) => {
        let coordinates = {
            lat: data.lat,
            lng: data.lon
        }
        $("#time").html(sunMotion(data.current.dt));
        reverseGeocode(coordinates, mapboxToken).then((result) => {
            $("#cityName").text(result);
        });
        for (let i = 0; i < data.daily.length; i++) {
            weatherSpot[0].innerHTML += forecast(data, i);
        }
    })



    //DisplaysForecast
    function forecast (data, i){
        let html = `<div class="weatherCard">`;
        html += `<p class="weekday">${dayOfWeek(data.daily[i].dt)}</p>`;
        html += `<p class="head">${callDateOfForecast(data.daily[i].dt + data.timezone_offset)}</p>`;
        html += `<p class="description">Sun rise: <span>${sunMotion(data.daily[i].sunrise)}</span></p>`;
        html += `<p class="description">Sun set: <span>${sunMotion(data.daily[i].sunset)}</span></p>`;
        html += `<img src="http://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}.png">`;
        html += `<p class="description">H: <span>${data.daily[i].temp.max}°</span></p>`;
        html += `<p class="description">L: <span>${data.daily[i].temp.min}°</span></p>`;
        html += `<p class="description">Feels Like: <span>${data.daily[i].feels_like.day}</span></p>`;
        html += `<p class="description">Humidity: <span>${data.daily[i].humidity}</span></p>`;
        html += `</div>`;
        return html;
    }


    //Functionality for Sunrise/Sunset
    function sunMotion(x){
        let date = new Date(x * 1000);
        let hours = date.getHours();
        let minutes = "0" + date.getMinutes();

        return `${hours}:${minutes.substr(-2)}`;
    }
    // Days of Week
    function dayOfWeek(x){
        let d = new Date(x * 1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = d.getDay();
        return `${days[day]}`;
    }
    //Gives Exact Date
    function callDateOfForecast(x){
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let d = new Date(x * 1000);
        let year = d.getFullYear();
        let month = d.getMonth();
        let m = months[month];
        let day = d.getDate();
        return `${day} ${m} ${year}`;
    }
});

