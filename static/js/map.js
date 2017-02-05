// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var mymap = L.map('mapid', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
id: 'mapbox.streets'
}).addTo(mymap);

// Test popup
L.marker([27.67927, 85.34431]).addTo(mymap)
.bindPopup("<b>Hello world!</b><br />I am a popup.");

var popup = L.popup();

function onMapClick(e) {
popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + e.latlng.toString())
  .openOn(mymap);
}

mymap.on('click', onMapClick);