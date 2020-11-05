"use strict";

// MAP BOX
mapboxgl.accessToken = mapboxToken;

console.log(mapboxToken)
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 8, // starting zoom
    // pitch: 75
});

//SCROLL ZOOM


map.scrollZoom.enable({ around: 'center' })


//FIRST RESTAURANT MARKER
var markerOptions = {
    color: "#ff0000",
    draggable: true
}

var pizzaMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.439068, 29.575529])
    .addTo(map);

var pizzaPopUp = new mapboxgl.Popup()
    .setHTML('<h3>Pizza Italia</h3><br><p>Best margherita slice in town! - John Brooks</p>')
    .addTo(map);

pizzaMarker.setPopup(pizzaPopUp);


//SECOND RESTAURANT MARKER
//
var markerOptionsMaxAndLouie = {
    color: "#0090ff",
    draggable: true
}

var MaxAndLouieMarker = new mapboxgl.Marker(markerOptionsMaxAndLouie)
    .setLngLat([-98.486198, 29.565375])
    .addTo(map);

var MaxAndLouiePopUp = new mapboxgl.Popup()
    .setHTML("<h3>Max and Louie's</h3><br><p>Literally anything on the menu! Great portions! - John Brooks</p>")
    .addTo(map);

MaxAndLouieMarker.setPopup(MaxAndLouiePopUp);

// //THIRD RESTAURANT MARKER

var markerOptionsChester = {
    color: "#1aff00",
    draggable: true
}

var chesterMarker = new mapboxgl.Marker(markerOptionsChester)
    .setLngLat([-98.473542, 29.593802])
    .addTo(map);

var chesterPopUp = new mapboxgl.Popup()
    .setHTML('<h3>Chesters Hamburgers</h3><br><p>Always good for a fresh burger and fries! - John Brooks</p>')
    .addTo(map);

chesterMarker.setPopup(chesterPopUp);