
var map = L.map('map').setView([39.969, -75.216], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'danaecmobley.93c497b4',
    accessToken: 'pk.eyJ1IjoiZGFuYWVjbW9ibGV5IiwiYSI6ImI4NTk0YWM4MWJlYjJiY2Y5ZWZmNjlmM2ViMGExYzk4In0.Lo6VOcZ5ZkTq9VVYDJo4Ew'
    }).addTo(map);

   //farmer market locations
    function addMarketToMap(data, map) {
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
    }

    $.getJSON("data/Philadelphia_Farmers_Markets.json", function(data) { addMarketToMap(data, map); });

  //health centers
    function addHealthCentersToMap(data, map) {
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
    }

    $.getJSON("data/Philadelphia_Health_Centers.json", function(data) { addHealthCentersToMap(data, map); });

    //Census Tracts
    function addTractsToMap(data, map) {
    var dataLayer = L.geoJson(data);
    dataLayer.addTo(map);
    }

    $.getJSON("data/Census_Tracts_2010.json", function(data) { addTractsToMap(data, map); });
